import { API_KEY, API_URL, lang } from "../../constants/API";
import Axios from 'axios'

export const listMovies = (payload) => (dispatch) => {
    Axios.get(`${API_URL}/list/${payload}`, {
        params: {
            api_key: API_KEY,
            language: lang
        }
    })
    .then(result => {
        if(payload === 1){
            dispatch({
                type: 'GET_FIRST_LIST_MOVIE',
                payload: result.data
            })
        } else {
            dispatch({
                type: 'GET_SECOND_LIST_MOVIE',
                payload: result.data
            })
        }
    })
    .catch(error => {
        alert('error')
    });
}

export const detailMovies = (payload) => (dispatch) => {
    Axios.get(`${API_URL}/movie/${payload}`, {
        params: {
            api_key: API_KEY,
            language: lang
        }
    })
    .then(result => {
        dispatch({
            type: 'GET_DETAIL_MOVIE',
            payload: result.data
        })
    })
    .catch(error => {
        alert('error',error)
    });
}