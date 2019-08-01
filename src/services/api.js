const signUp = username => {
    return fetch('https://final-fm-api.herokuapp.com/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username: username
        })
    })
        .then(res => res.json())

}

const logIn = () => {
    return fetch('https://final-fm-api.herokuapp.com/api/v1/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
}

const checkLogin = user_id => {
    return fetch(`https://final-fm-api.herokuapp.com/api/v1/users/${user_id}`)
    .then(res => res.json())
}

const getAllSongs = () => {
    return fetch('https://final-fm-api.herokuapp.com/api/v1/songs')
    .then(res => res.json())
}

const deleteSong = (song, user) => {
    return fetch('https://final-fm-api.herokuapp.com/api/v1/liked-songs', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            song_id: song.id,
            user_id: user.id
        })
        
    })
    .then(res => res.json())
    
}
const likeSong = (song, user) => {
    return fetch('https://final-fm-api.herokuapp.com/api/v1/liked-songs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            user_id: user.id,
            song_id: song.id
        })
    })
    .then(res => res.json())
}
const songEventInfo = (song) => {
    return fetch(`https://final-fm-api.herokuapp.com/api/v1/events-by-artist?artist_name=${song.artist.name.replace(new RegExp(/[èéêë]/g), "e")}`)
        .then(res => res.json())
}

const cityEventInfo = (city) => {
    return fetch(`https://final-fm-api.herokuapp.com/api/v1/events-by-city?city=${city}`)
        .then(res => res.json())
}

const getAllArtists = () => {
    return fetch('https://final-fm-api.herokuapp.com/api/v1/artists')
                .then(res => res.json())
}


export const api = {
    auth: {
        logIn,
        signUp,
        checkLogin
    },
    songs: {
        getAllSongs,
        deleteSong,
        likeSong,
        songEventInfo,
        cityEventInfo,
        getAllArtists
    }
}