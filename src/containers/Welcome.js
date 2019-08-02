import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { api } from '../services/api';
import AuthForm from '../components/AuthForm';
import logo from '../logo.svg'

class Welcome extends Component {
    _isMounted = false;

    state = {
        signup: '',
        login: '',
        isLoading: false
    }

    handleChange = ev => {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        if (this._isMounted) {
            this.setState({isLoading: true})
        }
        if (ev.target.name === 'signup-form') {
            if (this.state.signup) {
                api.auth.signUp(this.state.signup).then(json => {
                    json.id ? this.props.handleLogin(json) : this.props.addError("username") 
                    this.setState({isLoading: false})
                }) 
            }  
        }
        else if (ev.target.name === 'login-form') {
            api.auth.logIn().then(json => {
                for (let user of json) {
                    if (user.username === this.state.login) {
                        return  (
                            this.props.handleLogin(user),
                            window.history.pushState('/login', 'home', '/')
                        )
                    } else {
                        this.props.addError('login')
                    }
                }
            })
        } 
    }

    componentWillUnmount() {
        this._isMounted = false
    }
 
    render() {
        return (
            <Container>
                <Jumbotron id="jumbotron-color">
                    <h1>The Final FM</h1>
                    <hr/>
                </Jumbotron>
                <Row>
                    <Col>
                        <AuthForm 
                            type='signup'
                            handleOnSubmit={this.handleSubmit}
                            handleOnChange={this.handleChange}
                            value={this.state.signup}
                        />
                    </Col>
                    <Col>
                        <AuthForm
                            type='login'
                            handleOnSubmit={this.handleSubmit}
                            handleOnChange={this.handleChange}
                            value={this.state.login}
                        />
                    </Col>
                </Row>
                <Row>
                    {this.state.isLoading ? 
                    <Col style={{textAlign: "center"}}>
                        <p>Loading
                            <img src={logo} className='App-logo' alt='loading-logo' />
                        </p>
                    </Col>: null}
                </Row>
            </Container>
        )
    }
}

export default Welcome