import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button'
const RandomSong = (props) => {

    return <Fragment>
        <Button
        variant='primary'
        size='sm'
        tabIndex='1'
        onClick={props.handleOnClick}
        >Show Random Song
        </Button>
        {props.randomSong && props.randomSong.title ?
            <Fragment>
                <span><strong>{props.randomSong.title}</strong></span>
                {props.randomSong.album_img_url !== 'unspecified' ?
                    <img src={props.randomSong.album_img_url} alt={props.randomSong.title + ' album artwork'} />
                : <span>No Album Artwork Available</span>
                }
                <Button
                    variant='success'
                    size='sm'
                    id="like-random-song"
                    tabIndex='2'
                    onClick={() => props.likeSong(props.randomSong)}>
                    Like Song
                </Button>
            </Fragment>
        : null}
    </Fragment>

}

export default RandomSong