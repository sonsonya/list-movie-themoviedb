import { API_KEY, API_URL, lang } from "../../constants/API";
import Axios from 'axios'
import { list } from '../../constants/db.json';

export const listMovies = () => (dispatch) => {
    // Axios.get(`${API_URL}/list/1`, {
    //     params: {
    //         api_key: API_KEY,
    //         language: lang
    //     }
    // })
    // .then(result => {
    //     alert(result)
    // })
    // .catch(error => {
    //     alert(error)
    // });
    dispatch({
        type: 'GET_LIST_MOVIE',
        payload: list
    })
}

export const detailMovies = (payload) => () => {
    // Axios.get(`${API_URL}/movie/${payload}`, {
    //     params: {
    //         api_key: API_KEY,
    //         language: lang
    //     }
    // })
    // .then(result => {
    //     alert(result.data)
    // })
    // .catch(error => {
    //     alert('error',error)
    // });
}