import React, { Fragment } from 'react';

const RandomSong = (props) => {

    return <Fragment>
        <button tabIndex='1' onClick={props.handleOnClick}>Show Random Song</button>
        {props.randomSong.title ?
            <Fragment>
                <p>{props.randomSong.title}</p>
                {props.randomSong.album_img_url !== 'unspecified' ?
                    <img src={props.randomSong.album_img_url} alt={props.randomSong.title + ' album artwork'} />
                : <span>No Album Artwork Available</span>
                }
                <button tabIndex='2' onClick={() => props.likeSong(props.randomSong)}>
                    Like Song
                </button>
            </Fragment>
        : null}
    </Fragment>

}

export default RandomSong