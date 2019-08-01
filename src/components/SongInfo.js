import React from 'react';
import logo from '../logo.svg';

const SongInfo = (props) => {
    return <div className='info'>
        {props.loading ? <p>Loading
            <img src={logo} className='App-logo' alt='loading-logo' />
        </p> :
            <ul>
                {props.songInfo[0] ? <li className="list-group-item" >{props.songInfo[0].artist.name + "'s upcoming concerts"}</li> : null}                {props.songInfo[1] && props.songInfo[1].map((event, idx) => {
                    if (event.url) {
                        return <li className="list-group-item"  key={idx} >
                            <a href={event.url}  rel="noopener noreferrer"  target="_blank">
                                <img src={event.images[event.images.length - 2].url} alt={event.name + ' concert image'} />{event.name}
                            </a>
                        </li>
                    } else {
                        return <li className="list-group-item"  key='yeet'>{event.message}</li>
                    }
                })}
            </ul>
        }
    </div>       
}
        
export default SongInfo