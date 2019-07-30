import React from 'react';
import SongInfo from './SongInfo'

const MySongs = (props) => {
    return (
        <div>
            <ul>
                {props.songs.map((song, idx) => {
                    return <li key={idx}>{song.title}<button onClick={() => props.songInfo(song)}>Display Song Info</button><button onClick={() => props.deleteSong(song)}>Delete Song</button></li>
                })}
            </ul>
            <SongInfo songInfo={props.displaySongInfo} loading={props.loading} />
        </div>
    )
}

export default MySongs