import React, { Fragment } from 'react';
const RandomSong = (props) => {

    return <Fragment>
        <button className="btn btn-primary  btn-sm" tabIndex='1'  onClick={props.handleOnClick}>Show Random Song</button>
        {props.randomSong && props.randomSong.title ?
            <Fragment>
                <span>{props.randomSong.title}</span>
                {props.randomSong.album_img_url !== 'unspecified' ?
                    <img src={props.randomSong.album_img_url} alt={props.randomSong.title + ' album artwork'} />
                : <span>No Album Artwork Available</span>
                }
                <button className="btn btn-success  btn-sm" id="like-random-song" tabIndex='2' onClick={() => props.likeSong(props.randomSong)}>
                    Like Song
                </button>
            </Fragment>
        : null}
    </Fragment>

}

export default RandomSong