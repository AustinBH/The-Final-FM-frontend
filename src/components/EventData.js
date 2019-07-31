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
                    return <div key={idx}>
                        <img src={item.images[item.images.length - 2].url} alt={item.name + " concert image"} />
                        <a href={item.url}>{item.name}</a>
                    </div>
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