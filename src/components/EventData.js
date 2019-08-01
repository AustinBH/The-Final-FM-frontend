import React from 'react';
import { ListGroup } from 'react-bootstrap';
import logo from '../logo.svg';

const EventData = props => {

    return <div className="data-holder">
        {props.loading ?
            <p>Loading
                <img src={logo} className='App-logo' alt='loading-logo' />
            </p>
            :
            props.data.map((item, idx) => {
                if (item.url) {
                    return <ListGroup.Item key={idx}>
                        
                        <a href={item.url} target="_blank"  rel="noopener noreferrer" >
                            <img 
                                src={item.images[item.images.length - 2].url}
                                alt={item.name + " concert image"}
                            />
                            {item.name}
                        </a>
                    </ListGroup.Item>
                } else {
                    return <ListGroup.Item key={idx}>
                        {item.message}
                    </ListGroup.Item>
                }
            })
        } 
    </div>
}

export default EventData