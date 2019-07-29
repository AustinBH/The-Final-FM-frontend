import React from 'react';

const SearchData = props => {

    const filterData = () => {
        if (props.data[0] && props.data[0].images) {
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
        } else {
            return props.data.map((item, idx) => {
                return <div key={idx}>
                    <p>{item.title}
                    {props.likeButton(item)}
                    </p>
                </div>
            })
        }     
    }

        return <div className="data-holder">
            {filterData()}
        </div>
}

export default SearchData