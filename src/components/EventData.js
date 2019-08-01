import React from 'react';
import logo from '../logo.svg';

const EventData = props => {

    return <div className="data-holder">
        {props.loading ? <p>Loading
                            <img src={logo} className='App-logo' alt='loading-logo' />
        </p>
            :
            props.data.map((item, idx) => {
                if (item.url) {
                    return <li className="list-group-item" key={idx}>
                        
                        <a href={item.url} target="_blank"  rel="noopener noreferrer" ><img src={item.images[item.images.length - 2].url} alt={item.name + " concert image"} />{item.name}</a>
                    </li>
                } else {
                    return <div key={idx}>
                        {item.message}
                    </div>
                }
            })
        } 
    </div>
}

export default EventData