import React from 'react';

const SongInfo = (props) => {
    return <div>
        {props.loading ? <p>Loading...</p> :
            <div>
                <p>{props.songInfo[0] && props.songInfo[0].title}</p>
                <p>{props.songInfo[0] && props.songInfo[0].artist.name + "'s upcoming concerts"}</p>
                {props.songInfo[1] && props.songInfo[1].map((event, idx) => {
                    if (event.url) {
                        return <div key={idx} className='event-holder'>
                            <img src={event.images[event.images.length - 2].url} alt={event.name + ' concert image'} />
                            <a href={event.url}>{event.name}</a>
                        </div>
                    } else {
                        return <p key='yeet'>{event.message}</p>
                    }
                })}
            </div>
        }
    </div>       
}
        
export default SongInfo