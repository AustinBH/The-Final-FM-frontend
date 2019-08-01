import React from 'react';
import { ListGroup } from 'react-bootstrap'
import logo from '../logo.svg';

const SongInfo = (props) => {
    return <div className='info'>
        {props.loading ? <p>Loading
            <img src={logo} className='App-logo' alt='loading-logo' />
        </p> :
            <ListGroup>
                {props.songInfo[0] ? <ListGroup.Item >{props.songInfo[0].artist.name + "'s upcoming concerts"}</ListGroup.Item> : null}                {props.songInfo[1] && props.songInfo[1].map((event, idx) => {
                    if (event.url) {
                        return <ListGroup.Item className="list-group-item"  key={idx} >
                            <a href={event.url}  rel="noopener noreferrer"  target="_blank">
                                <img src={event.images[event.images.length - 2].url} alt={event.name + ' concert image'} />{event.name}
                            </a>
                        </ListGroup.Item>
                    } else {
                        return <ListGroup.Item key='yeet'>{event.message}</ListGroup.Item>
                    }
                })}
            </ListGroup>
        }
    </div>       
}
        
export default SongInfo