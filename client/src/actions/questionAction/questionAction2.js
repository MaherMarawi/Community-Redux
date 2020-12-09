import { IS_EDIT_TRUE_QUESTION, QUESTIONS_LOADING, IS_EDIT_FALSE_QUESTION, EDIT_QUESTION, ADD_QUESTION} from '../types'
import axios from 'axios'

export const addQuestion = (question, getState) => dispatch => {
    if(question.title == '' || question.description == '') alert('All fields are required')
    else{
        dispatch({ type: QUESTIONS_LOADING})
        axios.post('http://localhost:5000/api/AddQuestion', question, { headers: {"jwt" : `${localStorage.getItem('token')}` }})
        .then (res => {
            dispatch({
                type: ADD_QUESTION,
                payload: res.data
            })
        })
    }
}
export const editQuestion = (question) => (dispatch) => {
    if(question.title == '' || question.description == '') alert('All fields are required')
    else{
    axios.put(`http://localhost:5000/api/EditQuestion/${question._id}`, question, { headers: {"jwt" : `${localStorage.getItem('token')}` }})
        .then (() => {
            dispatch({
                type: EDIT_QUESTION,
                payload: question
            })
        })
    }
}
export const isEditTrue = () => dispatch => {
    dispatch({ type: IS_EDIT_TRUE_QUESTION })
}
export const isEditFasle = () => dispatch => {
    dispatch({ type: IS_EDIT_FALSE_QUESTION })
}