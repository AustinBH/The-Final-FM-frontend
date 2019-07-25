import React from 'react';

const MySongs = (props) => {
    return (
        props.songs.map((song, idx) => {
            return <li key={idx}>{song.title}</li>
        })
    )
}

export default MySongs