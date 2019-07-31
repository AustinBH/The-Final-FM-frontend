import React, { Component } from 'react';
import { api } from '../services/api';
import SongInfo from './SongInfo'

class MySongs extends Component {

    state = {
        songInfo: [],
        isLoading: false
    }

    songInfo = (song) => {
        this.setState({ isLoading: true })
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

    deleteSong = song => {
        this.setState({songInfo: []})
        this.props.deleteSong(song)
    }

    render() {
        return <div className='middle'>
            <ul>
                {this.props.songs.map((song, idx) => {
                    return <li key={idx}>
                                {song.title}
                                <button onClick={() => this.songInfo(song)}>
                                    Display Song Info
                                </button>
                                <button onClick={() => this.deleteSong(song)}>
                                    Delete Song
                                </button>
                            </li>
                })}
            </ul>
            <SongInfo songInfo={this.state.songInfo} loading={this.state.isLoading} />
        </div> 
    }
}

export default MySongs