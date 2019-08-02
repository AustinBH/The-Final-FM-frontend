import React, { Component } from 'react';
import { DropdownButton, ListGroup, Dropdown } from 'react-bootstrap';
import { api } from '../services/api';
import SongInfo from './SongInfo';

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
        return <div className="row">
            <div className="col-sm-6">
                <ListGroup>
                    {this.props.songs.map((song, idx) => {
                        return <ListGroup.Item key={idx}>
                                <span>{song.title}</span>
                                    <div id="button_floater">
                                        <Dropdown>
                                            <DropdownButton title='More Info' variant="primary">
                                                <Dropdown.Item onClick={() => this.songInfo(song)}>
                                                        Display Event Info
                                                </Dropdown.Item>
                                                <Dropdown.Item onClick={() => this.deleteSong(song)}>
                                                        Delete Song
                                                </Dropdown.Item>
                                            </DropdownButton>
                                        </Dropdown>
                                    </div>
                                </ListGroup.Item>
                    })}
                </ListGroup>
            </div>
            <div className="col-sm-6">
                <SongInfo songInfo={this.state.songInfo} loading={this.state.isLoading} />
            </div>
        </div> 
    }
}

export default MySongs