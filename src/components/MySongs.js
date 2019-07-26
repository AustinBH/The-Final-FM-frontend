import React from 'react';

const MySongs = (props) => {
    return (
        <ul>
            {props.songs.map((song, idx) => {
                return <li key={idx}>{song.title}</li>
            })}
        </ul>
    )
}

export default MySongs