
import { GET_QUESTIONS, SEARCH, GET_QUESTION, DELETE_QUESTION, QUESTIONS_LOADING } from '../types'
import axios from 'axios'
export const getQuestions = () => dispatch => {
    dispatch({type: QUESTIONS_LOADING})
    axios.get('http://localhost:5000/api/GetQuestions')
        .then( res => {
            dispatch({
                type: GET_QUESTIONS,
                payload: res.data
            })
        })
}
export const getQuestion = id => (dispatch, getState) => {
    dispatch({ type: QUESTIONS_LOADING})
    axios.get(`http://localhost:5000/api/GetQuestion/${id}`)
        .then( question => dispatch({
            type: GET_QUESTION,
            payload: question.data
        }))
            
}
export const deleteQuestion = (id) => dispatch => {
    dispatch({type: QUESTIONS_LOADING})
    axios.delete(`http://localhost:5000/api/RemoveQuestion/${id}`, { headers: {"jwt" : `${localStorage.getItem('token')}` }})
        .then( res => {
            dispatch({
                type: DELETE_QUESTION,
                payload: id
            })
        })
}
export const searchQuestions = (text) => dispatch => {
    dispatch({ type: SEARCH , payload: text})
}
