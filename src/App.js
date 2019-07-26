import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Home from './containers/Home';
import { api } from './services/api';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MySongs from './components/MySongs';
import Search from './components/Search';

class App extends Component {

  state = {
    user: {},
    songs: [],
    allSongs: []
  }

  login = user => {
    this.setState({user: user, songs: user.songs})
    api.songs.getAllSongs().then(json => this.setState({ allSongs: json }))
  }

  likeSong = (song) => {
    fetch('http://localhost:3000/api/v1/liked-songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        song_id: song.id
      })
    })
    .then(this.setState({ songs: [...this.state.songs, song] }))
  }

  render() {
    if (this.state.user.id) {
      return <div>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-songs">My Songs</Link>
            </li>
            <li>
              <Link to="/search">Song Search</Link>
            </li>
          </ul>
          <Route path="/search" exact render={props => <Search {...props} songs={this.state.allSongs} />} />
          <Route path="/my-songs" exact render={props => <MySongs {...props} songs={this.state.songs} />} />
        </Router>
        <Home user={this.state.user} likeSong={this.likeSong} allSongs={this.state.allSongs} />
      </div>
    } else {
      return <Welcome login={this.login}/>
    }
  }
}

export default App;
