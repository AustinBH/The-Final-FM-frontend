import React, { Component, Fragment } from 'react';
import {Modal} from 'react-bootstrap';
import { api } from './services/api';
import './App.css';
import Welcome from './containers/Welcome';
import Home from './containers/Home';



class App extends Component {

  state = {
    user: {},
    songs: [],
    allSongs: [],
    error: '',
    show: false
  }

  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({show: true});

  componentDidMount() {
    if (localStorage.getItem('user_id')) {
      api.auth.checkLogin(localStorage.getItem('user_id')).then(json => this.setState({ user: json, songs: json.songs || [] }))
      api.songs.getAllSongs().then(json => this.setState({ allSongs: json }))
    }
  }

  login = user => {
    localStorage.setItem('user_id', user.id)
    this.setState({user: user, songs: user.songs || []})
    api.songs.getAllSongs().then(json => this.setState({ allSongs: json }))
  }

  logout = () => {
    this.setState({user: {}, songs: []})
    localStorage.clear()
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
      api.songs.likeSong(song, this.state.user).then(json => this.setState({ songs: [...this.state.songs, song] }))
    } else {
      this.addError(song)
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
  
  addError = (str) => {
    str === "username" ? 
      this.setState({
        error: `The username is taken.`
      })
      :this.setState({
        error: `You have already liked this song.`
      })
    
    this.handleShow()
  }

  render() {
    return (
      <Fragment>
        <Modal
          show={this.state.show}
          animation={false}
          onHide={this.handleClose}
          className="error-modal"
          centered
          backdrop={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Error!!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.error}</Modal.Body>
        </Modal>
        {localStorage.getItem('user_id') ?

          <Home
            user={this.state.user}
            songs={this.state.songs}
            allSongs={this.state.allSongs}
            likeSong={this.likeSong}
            deleteSong={this.deleteSong}
            logout={this.logout}
            />
        :
        <Welcome handleLogin={this.login} addError={this.addError} />}
      </Fragment>
    )
    
  }
}

export default App;
