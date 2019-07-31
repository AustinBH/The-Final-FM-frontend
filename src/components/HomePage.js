import React from 'react'

const HomePage = (props) => {
        console.log(props)
    return (
        // null
        <div className="container">
                <h3>Welcome back {props.user.username}!!</h3>
    
        </div>
    )
}
export default HomePage