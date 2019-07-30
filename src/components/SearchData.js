import React from 'react';

const SearchData = props => {

    const filterData = () => {
        if (props.data[0] && props.data[0].title) {
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