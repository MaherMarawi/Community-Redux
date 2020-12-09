import { GET_USERS, SEARCH, LOADING_USERS } from '../types'
import axios from 'axios'

export const getUsers = () => dispatch => {
    dispatch({type: LOADING_USERS})
    axios.get(`http://localhost:5000/api/getUsers`)
        .then( res => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        })
}
export const searchUsers = (text) => dispatch => {
    dispatch({ type: SEARCH , payload: text})
}