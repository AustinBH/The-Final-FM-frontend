import React, { Fragment } from 'react';

const AuthForm = props => {
    return <Fragment>
        <div className={props.type}>
            <p>{props.type}</p>
            <form onSubmit={props.handleOnSubmit} name='signup-form'>
                <label>Username</label>
                <input type='text' value={props.value} name={props.type} onChange={props.handleOnChange} />
                <input type='submit' value={props.type} />
            </form>
        </div>
    </Fragment>
}

export default AuthForm