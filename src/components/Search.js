import React, { Component } from 'react';
import { api } from '../services/api';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            location: '',
            filteredSongs: [],
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
        } else {
            api.songs.cityEventInfo(this.state.location).then(json => this.setState({events: json}))
        }
    }

    displayLikeSongButton = (song) => {
        if (song.artist) {
         return <button onClick={() => this.props.likeSong(song)}>Like Song</button>
        } else {
            return null
        }
    }

    render() {
        return (
            <div className='welcome-page'>
                <div className='signup'>
                    <h3>Search For Songs By Title</h3>
                    <form onSubmit={this.handleSubmit} name='title-form'>
                        <input type='text' name='title' value={this.state.input} onChange={this.handleChange} />
                        <input type='submit' value='Search' />
                    </form>
                    <ul>{this.state.filteredSongs.map(song => {
                        return <li key={song.id}>{song.title} {this.displayLikeSongButton(song)}</li>
                    })}</ul>
                </div>
                <div className='login'>
                    <h3>Search For Events By City</h3>
                    <form onSubmit={this.handleSubmit} name='location-form'>
                        <input type='text' name='location' value={this.state.input} onChange={this.handleChange} />
                        <input type='submit' value='Search' />
                    </form>
                    {this.state.events.map((event, idx) => {
                        if (event.url) {
                            return <div key={idx} className='event-holder'>
                                <img src={event.images[0].url} alt={event.name + ' concert image'} />
                                <a href={event.url}>{event.name}</a>
                            </div>
                        } else {
                            return <p key='yeet'>{event.message}</p>
                        }})}
                </div>
            </div>
        )
    }
}

export default Search