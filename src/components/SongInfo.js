import React from 'react';

const SongInfo = (props) => {
    return (
        <div>
            <p>{props.songInfo[0] && props.songInfo[0].title}</p>
            <p>{props.songInfo[0] && props.songInfo[0].artist.name + "'s upcoming concerts"}</p>
            {props.songInfo[1] && props.songInfo[1].map((event, idx) => {
                if (event.url) {
                    return <div key={idx}>
                        <a href={event.url}>{event.name}<img src={event.images[0].url} alt={event.name + ' concert image'} /></a>
                        <br></br>
                    </div>
                } else {
                    return <p key='yeet'>{event.message}</p>
                }
            })}
        </div>
    )
}

export default SongInfo