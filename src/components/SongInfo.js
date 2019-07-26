import React from 'react';

const SongInfo = (props) => {
    return (
        <div>
            <p>{props.songInfo[0] && props.songInfo[0].title}</p>
            <p>{props.songInfo[0] && props.songInfo[0].artist.name}</p>
            {props.songInfo[1] && props.songInfo[1].map(event => {
                return <div key={event.url}>
                    <a href={event.url}>{event.name}<img src={event.images[0].url} alt={event.name + ' concert image'}/></a>
                    {/* <img src={event.images[0].url}/> */}
                    <br></br>
                    </div>
            })}
            

        </div>
    )
}

export default SongInfo