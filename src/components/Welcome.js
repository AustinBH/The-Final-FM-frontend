import React, { Component } from 'react';
import { api } from '../services/api';

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
            api.auth.signUp(this.state.signup).then(json => this.props.login(json))
        }
        else if (ev.target.name === 'login-form') {
            api.auth.logIn().then(json => {
                for (let user of json) {
                    if (user.username === this.state.login) {
                        return this.props.login(user)
                    }
                }
            })
        } 
    }
 
    render() {
        return (
            <div className='welcome-page'>
                <h2>Welcome to the Final FM</h2>
                <div className='signup'>
                    <p>Signup</p>
                    <form onSubmit={this.handleSubmit} name='signup-form'>
                        <label>Username</label>
                        <input type='text' value={this.state.signup} name='signup' onChange={this.handleChange} />
                        <input type='submit' value='Signup' />
                    </form>
                </div>
                <div className='login'>
                    <p>Login</p>
                    <form onSubmit={this.handleSubmit} name='login-form'>
                        <label>Username</label>
                        <input type='text' value={this.state.login} name='login' onChange={this.handleChange} />
                        <input type='submit' value='Login' />
                    </form>
                </div>
            </div>
        )

    }

}

export default Welcome