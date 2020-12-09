import { combineReducers } from 'redux'
import questionReducer from './questionReducer'
import commentReducer from './commentReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'

export default combineReducers({
    question: questionReducer,
    comment: commentReducer,
    user: userReducer,
    auth: authReducer
})