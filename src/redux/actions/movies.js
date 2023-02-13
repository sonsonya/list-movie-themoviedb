import { API_KEY, API_URL, language } from "../../constants/API";

export const listMovies = () => () => {
    Axios.get(`${API_URL}list/1?api_key=${API_KEY}&language=${language}`, {}, {
        method: 'POSTget',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then((result) => {
    })
    .catch((error) => {
        alert(payload)
    });
}

export const detailMovies = (payload) => () => {
    Axios.get(`${API_URL}movie/${payload}?api_key=${API_KEY}&language=${language}`, {}, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then((result) => {
    })
    .catch((error) => {
        alert(payload)
    });
}