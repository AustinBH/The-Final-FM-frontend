import React, { Component } from 'react'

class HomePage extends Component {

    state = {
        time: new Date().toLocaleTimeString()
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <div className="home-page">
                <h3>Welcome back {this.props.user.username}!!</h3>
                <p>The time is currently {this.state.time}</p>
                <p>The date is currently {(new Date().getMonth() + 1) + '-' + new Date().getDate() + '-' + new Date().getFullYear()}</p>
            </div>
        )
    }
}
export default HomePage