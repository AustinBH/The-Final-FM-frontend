import React, { Fragment } from 'react';
import logo from '../logo.svg';

const SongInfo = (props) => {
    return <div className='info'>
        {props.loading ? <p>Loading
            <img src={logo} className='App-logo' alt='loading-logo' />
        </p> :
            <Fragment>
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
            </Fragment>
        }
    </div>       
}
        
export default SongInfo