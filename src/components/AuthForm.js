import React from 'react';
import { Form, Button} from 'react-bootstrap';

const AuthForm = props => {

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return <div className={props.type}>
                <Form
                    onSubmit={props.handleOnSubmit}
                    name={props.type + '-form'}
                >
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>{capitalize(props.type)}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={props.value}
                            name={props.type}
                            onChange={props.handleOnChange}/>
                    </Form.Group>
                    <Button variant="primary" size='sm' type="submit">
                        {props.type}
                    </Button>
                </Form>
            </div>
}

export default AuthForm