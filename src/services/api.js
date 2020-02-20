import {apiUrl} from '../config/apiUrl'


const api = (url) => {
    return fetch(`${apiUrl.api}${url}`);
}

// промис
export const getUsers = async() => {
    const response = await api('/users');
    return await response.json(); // вернется распарш json
}