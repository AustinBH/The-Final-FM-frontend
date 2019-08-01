import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = props => {
    return <div className='search'>
        <Form onSubmit={props.handleOnSubmit} name={`${props.type}-form`}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Search by {props.type}</Form.Label>
                <Form.Control
                    type='text'
                    name={props.type}
                    value={props.value}
                    onChange={props.handleOnChange}
                    placeholder={'Enter ' + props.type}/>
            </Form.Group>
            <Button variant="primary" size='sm' type="submit">
                Search
            </Button>
        </Form>
    </div>
}

export default SearchForm