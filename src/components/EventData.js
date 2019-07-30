import React from 'react';

const EventData = props => {

    const filterData = () => {
        return props.data.map((item, idx) => {
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

    return <div className="data-holder">
        {filterData()}
    </div>
}

export default EventData