import React, { Component } from 'react';
import { api } from '../services/api';
import AuthForm from '../components/AuthForm';

class Welcome extends Component {

    state = {
        signup: '',
        login: ''
    }

    handleChange = ev => {
        if (ev.target.name === 'signup') {
            const signup = ev.target.value
            this.setState({ signup })
        }
        else if (ev.target.name === 'login') {
            const login = ev.target.value
            this.setState({ login })
        }

    }

    handleSubmit = ev => {
        ev.preventDefault()
        if (ev.target.name === 'signup-form') {
            api.auth.signUp(this.state.signup).then(json => this.props.handleLogin(json))
            
        }
        else if (ev.target.name === 'login-form') {
            api.auth.logIn().then(json => {
                for (let user of json) {
                    if (user.username === this.state.login) {
                        return  (
                            this.props.handleLogin(user),
                            window.history.pushState('/login', 'home', '/')
                        )
                    }
                }
            })
        } 
    }
 
    render() {
        return (
            <div className='welcome-page'>
                <h2>Welcome to the Final FM</h2>
                <AuthForm 
                type='signup'
                handleOnSubmit={this.handleSubmit}
                handleOnChange={this.handleChange}
                value={this.state.signup}
                />
                <AuthForm
                    type='login'
                    handleOnSubmit={this.handleSubmit}
                    handleOnChange={this.handleChange}
                    value={this.state.login}
                />
            </div>
        )

    }

}

export default Welcome