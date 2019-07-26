import React, { Component } from 'react';
import RandomSong from '../components/RandomSong';

class Home extends Component {

    constructor() {
        super()
        this.state = {
            allSongs: [],
            randomSong: []
        }
    }

    getAllSongs = () => {
        fetch('http://localhost:3000/api/v1/songs')
        .then(res => res.json())
        .then(json => this.setState({allSongs: json}))
    }

    componentDidMount() {
        this.getAllSongs()
    }

    displayRandomSongs = () => {
        let randomSong = this.state.allSongs[Math.floor(Math.random() * this.state.allSongs.length)]
        console.log(randomSong)
        this.setState({randomSong})
    }
 
    render() {
        return <RandomSong randomSong={this.state.randomSong} handleOnClick={this.displayRandomSongs} likeSong={this.props.likeSong}/>
    }
}

export default Home