const baseURL = process.env.REACT_APP_URL;

const api = '/api';

const endPoints = {
    api: {
        auth: `${baseURL}${api}/auth`,
    }
}

export {
    baseURL,
    endPoints,
}