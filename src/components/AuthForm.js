import React, { Fragment } from 'react';

const AuthForm = props => {

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    return <Fragment>
        <div className={props.type}>
            <p>{capitalize(props.type)}</p>
            <form onSubmit={props.handleOnSubmit} name={props.type + '-form'}>
                <label>Username</label>
                <input type='text' value={props.value} name={props.type} onChange={props.handleOnChange} />
                <input type='submit' value={props.type} />
            </form>
        </div>
    </Fragment>
}

export default AuthForm