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

export const api = {
    auth: {
        logIn,
        signUp
    },
    songs: {
        getAllSongs
    }
}