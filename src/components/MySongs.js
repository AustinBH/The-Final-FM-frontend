import React from 'react';

const MySongs = (props) => {
    return (
        props.songs.map(song => {
            return <h1>{song.title}</h1>
        })
    )
}

export default MySongs