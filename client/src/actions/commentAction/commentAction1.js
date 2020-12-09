import { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT, COMMENTS_LOADING } from '../types'
import axios from 'axios'
export const getComments = id => dispatch => {
    dispatch({type: COMMENTS_LOADING})
    axios.get(`http://localhost:5000/api/AllComments/${id}`)
        .then( res => {
            dispatch({
                type: GET_COMMENTS,
                payload: res.data
            })
        })
}
export const deleteComment = (id) => dispatch => {
    axios.delete(`http://localhost:5000/api/RemoveComment/${id}`, { headers: {"jwt" : `${localStorage.getItem('token')}` }})
        .then( res => {
            dispatch({
                type: DELETE_COMMENT,
                payload: id
            })
        })
}
export const addComment = (id, comment) => dispatch => {
    if(!comment.comment) alert('All fields are required')
    else{
    axios.post(`http://localhost:5000/api/AddComment/${id}`, comment, { headers: {"jwt" : `${localStorage.getItem('token')}` }})
        .then (res => {
            dispatch({
                type: ADD_COMMENT,
                payload: res.data
            })
        })
    }
}
