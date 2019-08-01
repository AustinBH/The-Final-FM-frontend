import React from 'react';

const AuthForm = props => {

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return <div className={props.type}>
                <p>{capitalize(props.type)}</p>
                <form onSubmit={props.handleOnSubmit} name={props.type + '-form'}>
                    <input type='text' value={props.value} placeholder="Username" name={props.type} onChange={props.handleOnChange} />
                    <input className="btn btn-sm btn-primary" type='submit' value={props.type} />
                </form>
            </div>
}

export default AuthForm