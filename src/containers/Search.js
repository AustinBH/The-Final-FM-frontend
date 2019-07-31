import React, { Component, Fragment } from 'react';
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
            events: [],
            isLoading: false
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
            this.setState({ isLoading: true })
            api.songs.cityEventInfo(this.state.city).then(json => {
                this.setState({ events: json })
                this.setState({ isLoading: false })
            })
            
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
         return <button  className="btn btn-primary"  onClick={() => this.props.likeSong(song)}>Like Song</button>
        } else {
            return null
        }
    }

    componentDidMount() {
        api.songs.getAllArtists().then(json => this.setState({allArtists: json}))
    }

    render() {
        return (
            <Fragment>
                <div className='row'>
                    <div className="col-sm-8 search-label">
                        <h1>Song Search</h1>
                    </div>
                    <div className="col-sm-4 search-label">
                        <h1>Event Search</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-sm-4">
                        
                        <SearchForm
                            type='title'
                            handleOnSubmit={this.handleSubmit}
                            handleOnChange={this.handleChange}
                            value={this.state.title}
                        />
                        <SearchData data={this.state.filteredSongs} likeButton={this.displayLikeSongButton}/>


                    </div>
                    <div className="col-sm-4">
                        <SearchForm
                            type='artist'
                            handleOnSubmit={this.handleSubmit}
                            handleOnChange={this.handleChange}
                            value={this.state.artist}
                        />
                        <SearchData data={this.state.artistSongs} likeButton={this.displayLikeSongButton} />
                    </div>
                    <div className="col-sm-4">                
                        <SearchForm
                            type='city'
                            handleOnSubmit={this.handleSubmit}
                            handleOnChange={this.handleChange}
                            value={this.state.location}
                        />
                        <EventData data={this.state.events} loading={this.state.isLoading}/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Search