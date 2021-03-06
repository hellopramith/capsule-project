import axios from 'axios';
import Chatkit from '@pusher/chatkit';

export function getUserName(username) {
    return axios.post('http://localhost:3001/users',{ username }).then(result => new Promise((resolve, reject) => {
        resolve(username);
    })).catch(error => {return username})
}

export function getChat(username) {

    return new Chatkit.ChatManager({
        instanceLocator: 'v1:us1:4b9830d2-44d5-464b-8a84-225ed473b5ba',
        userId: username,
        tokenProvider: new Chatkit.TokenProvider({
            url: 'http://localhost:3001/authenticate'
        })
    })
}