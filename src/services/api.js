const signUp = username => {
    return fetch('http://localhost:3000/api/v1/users', {
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

const logIn = username => {
    return fetch('http://localhost:3000/api/v1/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
}

const getAllSongs = () => {
    return fetch('http://localhost:3000/api/v1/songs')
    .then(res => res.json())
}

const deleteSong = (song, user) => {
    return fetch('http://localhost:3000/api/v1/liked-songs', {
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
const songEventInfo = (song) => {
    console.log(song)
    return fetch(`http://localhost:3000/api/v1/events-by-artist?artist_name=${song.artist.name}`)
    .then(res => res.json())
}


export const api = {
    auth: {
        logIn,
        signUp
    },
    songs: {
        getAllSongs,
        deleteSong,
        songEventInfo
    }
}