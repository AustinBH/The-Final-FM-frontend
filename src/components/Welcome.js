import React, { Component } from 'react';

class Welcome extends Component {

    state = {
        signup: '',
        login: ''
    }

    createAccount = username => {
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: username
            })
        })
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            this.props.login(json)
        })
    }

    logIn = username => {
        fetch('http://localhost:3000/api/v1/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            for (let user of json) {
                if (user.username === username) {
                    return this.props.login(user)
                }
            }
        })
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
            this.createAccount(this.state.signup)
        }
        else if (ev.target.name === 'login-form') {
            this.logIn(this.state.login)
        } 
    }


 
    render() {
        if (this.props.user && this.props.user.id) {
            return null
        } else {
            return (
                <div>
                    <h2>Welcome to the Final FM</h2>
                    <label>Signup</label>
                    <form onSubmit={this.handleSubmit} name='signup-form'>
                        <label>Username</label>
                        <input type='text' value={this.state.signup} name='signup' onChange={this.handleChange} />
                        <input type='submit' value='Signup' />
                    </form>
                    <label>Login</label>
                    <form onSubmit={this.handleSubmit} name='login-form'>
                        <label>Username</label>
                        <input type='text' value={this.state.login} name='login' onChange={this.handleChange} />
                        <input type='submit' value='Login' />
                    </form>
                </div>
            )
        }

    }

}

export default Welcome