import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Home from './containers/Home';
import { api } from './services/api';

class App extends Component {

  state = {
    user: {}
  }

  login = user => {
    this.setState({user: user})
  }

  render() {
    if (this.state.user.id) {
      return (
        <Home user={this.state.user} />
      );
    } else {
      return (
        <Welcome login={this.login}/>
      );
    }
  }
}

export default App;
