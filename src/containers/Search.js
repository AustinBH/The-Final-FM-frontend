import React, { Component } from 'react';
import { api } from '../services/api';
import SearchForm from '../components/SearchForm';
import SearchData from '../components/SearchData';
import EventData from '../components/EventData';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            city: '',
            artist: '',
            filteredSongs: [],
            artistSongs: [],
            events: []
        }
    }

    handleChange = ev => {
        this.setState({[ev.target.name]: ev.target.value})
    }

    handleSubmit = ev => {
        ev.preventDefault()
        if (ev.target.name === 'title-form') {
            const filteredSongs = this.props.songs.filter(song => {
                return song.title.toLowerCase().includes(this.state.title.toLowerCase())
            })
            if (filteredSongs.length === 0) {
                this.setState({ filteredSongs: [{ title: `There are no songs with ${this.state.title} in the title`, id: 'yeet' }] })
            } else {
                this.setState({ filteredSongs })
            }
        } else if (ev.target.name === 'city-form') {
            api.songs.cityEventInfo(this.state.city).then(json => this.setState({events: json}))
        } else {
            const artistSongs = this.props.songs.filter(song => {
                return song.artist.name.toLowerCase().includes(this.state.artist.toLowerCase())
            })
            if (artistSongs.length === 0) {
                this.setState({ artistSongs: [{title: `There are no songs by ${this.state.artist}`, id: 'yeet'}]})
            } else {
                this.setState({ artistSongs})
            }
        }
    }

    displayLikeSongButton = (song) => {
        if (song.artist) {
         return <button onClick={() => this.props.likeSong(song)}>Like Song</button>
        } else {
            return null
        }
    }

    componentDidMount() {
        api.songs.getAllArtists().then(json => this.setState({allArtists: json}))
    }

    render() {
        return (
            <div className='welcome-page'>
                <SearchForm
                    type='title'
                    handleOnSubmit={this.handleSubmit}
                    handleOnChange={this.handleChange}
                    value={this.state.title}
                />
                <SearchData data={this.state.filteredSongs} likeButton={this.displayLikeSongButton}/>
                <SearchForm
                    type='city'
                    handleOnSubmit={this.handleSubmit}
                    handleOnChange={this.handleChange}
                    value={this.state.location}
                />
                <EventData data={this.state.events}/>
                <SearchForm
                    type='artist'
                    handleOnSubmit={this.handleSubmit}
                    handleOnChange={this.handleChange}
                    value={this.state.artist}
                />
                <SearchData data={this.state.artistSongs} likeButton={this.displayLikeSongButton} />
            </div>
        )
    }
}

export default Search