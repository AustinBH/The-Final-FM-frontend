import React, { Component } from 'react';
import Modal from 'react-modal'
import { api } from './services/api';
import './App.css';
import Welcome from './components/Welcome';
import Home from './containers/Home';

Modal.setAppElement('#root')

class App extends Component {

  state = {
    user: {},
    songs: [],
    allSongs: [],
    songInfo: []
  }

  login = user => {
    this.setState({user: user, songs: user.songs || []})
    api.songs.getAllSongs().then(json => this.setState({ allSongs: json }))
  }

  logout = () => {
    this.setState({user: {}, songs: []})
  }

  compareSongs = song => {
    for (let i = 0; i < this.state.songs.length; i++) {
      if (this.state.songs[i].title === song.title) {
        return false
      }
    }
    return true
  }

  likeSong = (song) => {
    if (this.compareSongs(song)) {
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
      return <Home
        user={this.state.user}
        songs={this.state.songs}
        allSongs={this.state.allSongs}
        likeSong={this.likeSong}
        songInfo={this.songInfo}
        deleteSong={this.deleteSong}
        logout={this.logout}
        />
    } else {
      return <Welcome handleLogin={this.login} />
    }
  }
}

export default App;
