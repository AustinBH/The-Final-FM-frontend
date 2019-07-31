import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import MySongs from '../components/MySongs';
import RandomSong from '../components/RandomSong';
import Search from './Search';

class Home extends Component {

    state = {
        randomSong: []
    }

    displayRandomSongs = () => {
        let randomSong = this.props.allSongs[Math.floor(Math.random() * this.props.allSongs.length)]
        this.setState({randomSong})
    }
 
    render() {
        return (
            <div>
                <div className='home'>
                    <RandomSong
                        randomSong={this.state.randomSong}
                        handleOnClick={this.displayRandomSongs}
                        likeSong={this.props.likeSong}
                    />
                </div>
                <Router>
                    <NavLink 
                        className='nav-link'
                        to="/" exact
                        activeStyle={{ background: 'darkcyan' }}
                    >Home</NavLink>
                    <NavLink 
                        className='nav-link'
                        to="/my-songs" exact
                        activeStyle={{ background: 'darkcyan' }}
                    >My Songs</NavLink>
                    <NavLink 
                        className='nav-link'
                        to="/search" exact
                        activeStyle={{ background: 'darkcyan' }}
                    >Song Search</NavLink>
                    <NavLink 
                        className='nav-link'
                        to='/login' exact
                        onClick={this.props.logout}
                    >Logout</NavLink>
                    <Route path="/search" exact render={props => <Search {...props} songs={this.props.allSongs} likeSong={this.props.likeSong} />} />
                    <Route path="/my-songs" exact render={props => <MySongs {...props} songs={this.props.songs} deleteSong={this.props.deleteSong}/>} />
                </Router>
            </div>
        )
        
    }
}

export default Home