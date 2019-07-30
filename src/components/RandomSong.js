import React from 'react';

const RandomSong = (props) => {

    return <div>
        <button onClick={props.handleOnClick}>Show Random Song</button>
        {props.randomSong.title ?
            <p>{props.randomSong.title}
                <button onClick={() => props.likeSong(props.randomSong)}>
                    Like Song
                </button>
            </p>
        : null}
    </div>

}

export default RandomSong