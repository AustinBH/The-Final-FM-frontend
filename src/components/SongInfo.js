import React from 'react';

const SongInfo = (props) => {
    return (
        <div>
            <p>{props.songInfo[0] && props.songInfo[0].title}</p>
            <p>{props.songInfo[1] && props.songInfo[1].map(event => {
                return <div>
                    <a href={event.url}>{event.name}<img src={event.images[0].url}/></a>
                    {/* <img src={event.images[0].url}/> */}
                    <br></br>
                    </div>
            })}</p>
            

        </div>
    )
}

export default SongInfo