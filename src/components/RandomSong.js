import React from 'react';

const RandomSong = (props) => {

    return (
        <div>
            <h1 onClick={props.handleOnClick}>Show Random Song:</h1>
            <p>{props.randomSong.title} <button onClick={props.likeSong}>Like Song</button></p>
        </div>
    )
}

export default RandomSong