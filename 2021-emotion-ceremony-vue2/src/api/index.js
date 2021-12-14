import axios from 'axios';

const config = {
    baseUrl: "https://jsonplaceholder.typicode.com/",
};

function fetchUser() {
    return axios.get(`${config.baseUrl}users/`);
}

export {
    fetchUser
}

