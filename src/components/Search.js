import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            filteredSongs: []
        }
    }

    handleChange = ev => {
        this.setState({input: ev.target.value})
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const filteredSongs = this.props.songs.filter(song => {
            return song.title.toLowerCase().includes(this.state.input.toLowerCase())
        })
        if (filteredSongs.length === 0){
            this.setState({filteredSongs: [{title: `There are no songs with ${this.state.input} in the title`, id: 'yeet'}]})
        } else {
            this.setState({ filteredSongs })
        }
    }

    render() {
        return (
            <div>
                <h1>Search By Song</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.input} onChange={this.handleChange} />
                    <input type='submit' value='Search' />
                </form>
                <ul>{this.state.filteredSongs.map(song => {
                    return <li key={song.id}>{song.title}</li>
                })}</ul>
              
            </div>
        )
    }
}

export default Search