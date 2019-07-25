import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Home from './containers/Home';

class App extends Component {

  state = {
    user: {}
  }

  login = user => {
    this.setState({user: user})
    console.log(this.state.user)
  }

  render() {
    return (
      <div>
        <Home user={this.state.user} />
        <Welcome login={this.login} user={this.state.user}/>
      </div>
    );
  }
}

export default App;
