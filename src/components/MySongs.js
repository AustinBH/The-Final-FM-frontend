import React from 'react';

const MySongs = (props) => {
    return (
        <ul>
            {props.songs.map((song, idx) => {
                return <li key={idx}>{song.title}<button onClick={() => props.songInfo(song)}>Display Song Info</button><button onClick={() => props.deleteSong(song)}>Delete Song</button></li>
            })}
        </ul>
    )
}

export default MySongs