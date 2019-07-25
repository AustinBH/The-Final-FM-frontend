import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MySongs from '../components/MySongs';
import Search from '../components/Search';
import RandomSong from '../components/RandomSong';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mySongs: [],
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

    likeSong = () => {
        fetch('http://localhost:3000/api/v1/liked-songs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.user.id,
                song_id: this.state.randomSong.id
            })
        })
        .then(res => res.json())
        .then(() => {
            const mySongs = [...this.state.mySongs, this.state.randomSong]
            this.setState({mySongs})
        })
    }
 
    render() {
        if (this.props.user && this.props.user.id) {
            return (
                <header>
                    <Router>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/my-songs">My Songs</Link>
                            </li>
                            <li>
                                <Link to="/search">Artist Search</Link>
                            </li>
                        </ul>
                        <Route path="/" exact component={Home} />
                        <Route path="/my-songs" exact render={props => <MySongs {...props} songs={this.state.mySongs} />} />
                        <Route path="/search" exact component={Search} />
                    </Router>
                    <RandomSong randomSong={this.state.randomSong} handleOnClick={this.displayRandomSongs} likeSong={this.likeSong}/>
                </header> 

            )
        } else {
           return null
        }  

    }
}

export default Home