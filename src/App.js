import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Home from './containers/Home';
import { api } from './services/api';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import MySongs from './components/MySongs';
import Search from './components/Search';
// import SongInfo from './components/SongInfo'

class App extends Component {

  state = {
    user: {},
    songs: [],
    allSongs: [],
    songInfo: []
  }

  login = user => {
    this.setState({user: user, songs: user.songs})
    api.songs.getAllSongs().then(json => this.setState({ allSongs: json }))
  }

  likeSong = (song) => {
    if (!this.state.songs.includes(song)) {
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
  }
  deleteSong = (song) => {
    api.songs.deleteSong(song, this.state.user).then(json => {
      const songs = this.state.songs.filter(singleSong => singleSong.id !== song.id)
      this.setState({
        songs
      })
    })
  }
  songInfo = (song) => {
    if (this.state.songInfo[0] && this.state.songInfo[0].title === song.title) {
       this.setState({ songInfo: [] })
    } else {
      const message = { message: `${song.artist.name} has no upcoming events` }
      api.songs.songEventInfo(song).then(json => {
        if (json.message || json.status === 500) {
          this.setState({ songInfo: [song, [message]]})
        }
        else {
          const songInfo = [song, json]
          this.setState({ songInfo })
        }
      })
    }
  }

  render() {
    if (this.state.user.id) {
      return <div>
        <Router>
          <NavLink className='nav-link' to="/" exact>Home</NavLink>
          <NavLink className='nav-link' to="/my-songs" exact>My Songs</NavLink>
          <NavLink className='nav-link' to="/search" exact>Song Search</NavLink>
          <Route path="/search" exact render={props => <Search {...props} songs={this.state.allSongs} likeSong={this.likeSong}/>} />
          <Route path="/my-songs" exact render={props => <MySongs {...props} songs={this.state.songs} songInfo={this.songInfo} displaySongInfo={this.state.songInfo} deleteSong={this.deleteSong} />} />
        </Router>
        <Home user={this.state.user} likeSong={this.likeSong} allSongs={this.state.allSongs} />
      </div>
    } else {
      return <Welcome login={this.login}/>
    }
  }
}

export default App;
