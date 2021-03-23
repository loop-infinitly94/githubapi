import {getUrl} from './mainclient';
import axios from 'axios';

const GET_UsersGists = (userName) => {
    try {
        const config = {
            url: getUrl(["users", userName, "gists"]),
            method: 'get',
        }
        return new Promise((resolve, reject) => {
            axios.request(config)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (err) {
                resolve(err);
            })
        })
    }
    catch (e) {
        console.log(e); // pass exception object to err handler
    }
}

const GET_UserForks = (callback, gistsId) => {
    try {
        const config = {
            url: getUrl(["gists", gistsId, "forks"]),
            method: 'get',
        }
        return axios.request(config)
            .then(function (response) {
                callback(response);
            })
            .catch(function (err) {
                callback(err);
            })

    }
    catch (e) {
        callback(e); // pass exception object to err handler
    }
}

export { GET_UsersGists, GET_UserForks }