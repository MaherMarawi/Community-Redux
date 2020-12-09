import { IS_EDIT_TRUE_COMMENT, SEARCH, IS_EDIT_FALSE_COMMENT, EDIT_COMMENT } from '../types'
import axios from 'axios'

export const editComment = (comment) => (dispatch, getState) => {
    if(comment.comment == '') alert('All fields are required')
    else{
        axios.put(`http://localhost:5000/api/EditComment/${comment._id}`, comment,{ headers: {"jwt" : `${localStorage.getItem('token')}` }})
        .then (() => {
            const newComments = getState().comment.comments.filter(value => value._id !== comment._id)
            const res = [comment, ...newComments]
            dispatch({
                type: EDIT_COMMENT,
                payload: res
            })
        })
    }
    
}
export const isEditTrue = (id) => dispatch => {
    dispatch({ type: IS_EDIT_TRUE_COMMENT, payload: id })
}
export const isEditFalse = () => dispatch => {
    dispatch({ type: IS_EDIT_FALSE_COMMENT })
}
export const searchComments = (text) => dispatch => {
    dispatch({ type: SEARCH , payload: text})
}