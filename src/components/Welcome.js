import React, { Component } from 'react';

class Welcome extends Component {

    state = {
        input: ''
    }

    createAccount = username => {
        fetch('http://localhost:3000/v1/users', {
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
 
    handleChange = ev => {
        const input = ev.target.value
        this.setState({input})
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.createAccount(this.state.input)
    }


 
    render() {
        if (this.props.user && this.props.user.id) {
            return null
        } else {
            return (
                <div>
                    <h2>Welcome to the Final FM</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input type='text' value={this.state.input} onChange={this.handleChange} />
                        <input type='submit' value='Signup' />
                    </form>
                </div>
            )
        }

    }

}

export default Welcome