import React from 'react';

const SearchForm = props => {
    return <div className='search'>
        <h3>Search by {props.type}</h3>
        <form onSubmit={props.handleOnSubmit} name={`${props.type}-form`}>
            <input type='text' name={props.type} value={props.value} onChange={props.handleOnChange} />
            <input type='submit' value='Search' />
        </form>
    </div>
}

export default SearchForm