import React, { Fragment } from 'react';

const RandomSong = (props) => {

    return <Fragment>
        <button onClick={props.handleOnClick}>Show Random Song</button>
        {props.randomSong.title ?
            <Fragment>
                <p>{props.randomSong.title}</p>
                <button onClick={() => props.likeSong(props.randomSong)}>
                    Like Song
                </button>
            </Fragment>
        : null}
    </Fragment>

}

export default RandomSong