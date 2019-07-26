import React from 'react';

const RandomSong = (props) => {

    if (props.randomSong.title) {
        return (
            <div>
                <button onClick={props.handleOnClick}>Show Random Song</button>
                <p>{props.randomSong.title} <button onClick={() => props.likeSong(props.randomSong)}>Like Song</button></p>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={props.handleOnClick}>Show Random Song</button>
            </div>
        )
    }

}

export default RandomSong