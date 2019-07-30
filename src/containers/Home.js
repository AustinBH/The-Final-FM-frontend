import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { api } from '../services/api';
import MySongs from '../components/MySongs';
import RandomSong from '../components/RandomSong';
import Search from './Search';


class Home extends Component {

    constructor() {
        super()
        this.state = {
            randomSong: [],
            songInfo: [],
            isLoading: false
        }
    }

    displayRandomSongs = () => {
        let randomSong = this.props.allSongs[Math.floor(Math.random() * this.props.allSongs.length)]
        this.setState({randomSong})
    }

    songInfo = (song) => {
        this.setState({isLoading: true})
        if (this.state.songInfo[0] && this.state.songInfo[0].title === song.title) {
            this.setState({ songInfo: [] })
            this.setState({ isLoading: false })
        } else {
            const message = { message: `${song.artist.name} has no upcoming events` }
            api.songs.songEventInfo(song).then(json => {
                if (json.message || json.status === 500) {
                    this.setState({ songInfo: [song, [message]] })
                    this.setState({ isLoading: false })
                }
                else {
                    const songInfo = [song, json]
                    this.setState({ songInfo })
                    this.setState({ isLoading: false })
                }
            })
        }
    }
 
    render() {
        return (
            <div>
                <Router>
                    <NavLink className='nav-link' to="/" exact>Home</NavLink>
                    <NavLink className='nav-link' to="/my-songs" exact>My Songs</NavLink>
                    <NavLink className='nav-link' to="/search" exact>Song Search</NavLink>
                    <NavLink className='nav-link' to='/login' onClick={this.props.logout} exact>Logout</NavLink>
                    <Route path="/search" exact render={props => <Search {...props} songs={this.props.allSongs} likeSong={this.props.likeSong} />} />
                    <Route path="/my-songs" exact render={props => <MySongs {...props} songs={this.props.songs} songInfo={this.songInfo} displaySongInfo={this.state.songInfo} deleteSong={this.props.deleteSong} loading={this.state.isLoading}/>} />
                </Router>
                <div className='home'>
                    <RandomSong
                        randomSong={this.state.randomSong}
                        handleOnClick={this.displayRandomSongs}
                        likeSong={this.props.likeSong}
                    />
                </div>
            </div>
        )
        
    }
}

export default Home