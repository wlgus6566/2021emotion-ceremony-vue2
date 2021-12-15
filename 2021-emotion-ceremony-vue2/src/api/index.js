import axios from 'axios';

const config = {
    baseUrl: "https://jsonplaceholder.typicode.com/",
};

function fetchUser() {
    return axios.get(`${config.baseUrl}users/`);
}
function fetchWords() {
    return axios.get(`${config.baseUrl}posts/`);
}

export {
    fetchUser,
    fetchWords
}

