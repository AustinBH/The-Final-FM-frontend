import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SearchData = props => {

    const filterData = () => {
        if (props.data[0] && props.data[0].title) {
            return props.data.map((item, idx) => {
                return <ListGroup.Item key={idx}>
                        <p>{item.title}</p>
                        {props.likeButton(item)}
                </ListGroup.Item>
            })  
        }
    }

    return <div className="data-holder">
        <ListGroup>{filterData()}</ListGroup>
    </div>
}

export default SearchData