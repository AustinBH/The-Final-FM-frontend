import React, { Component } from 'react';
import RandomSong from '../components/RandomSong';
import { api } from '../services/api';

class Home extends Component {

    constructor() {
        super()
        this.state = {
            randomSong: []
        }
    }

    displayRandomSongs = () => {
        let randomSong = this.props.allSongs[Math.floor(Math.random() * this.props.allSongs.length)]
        this.setState({randomSong})
    }
 
    render() {
        return (
            <div>
                <RandomSong
                randomSong={this.state.randomSong}
                handleOnClick={this.displayRandomSongs}
                likeSong={this.props.likeSong}
                />
            </div>
        )
        
    }
}

export default Home