import React from 'react';

const SearchData = props => {

    const filterData = () => {
        if (props.data[0] && props.data[0].title) {
            return props.data.map((item, idx) => {
                return <li className="list-group-item" key={idx}>
                    {item.title}
                    <span id="button_floater">{props.likeButton(item)}</span>
                </li>
            })  
        }
    }

    return <div className="data-holder">
        <ul className="list-group">{filterData()}</ul>
    </div>
}

export default SearchData