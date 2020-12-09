import { GET_QUESTIONS, SEARCH, IS_EDIT_TRUE_QUESTION, IS_EDIT_FALSE_QUESTION, EDIT_QUESTION, GET_QUESTION, ADD_QUESTION, DELETE_QUESTION, QUESTIONS_LOADING } from '../actions/types'

const initialState = {
    questions: [],
    loading: false,
    question: {},
    isEdit: false,
    value: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                questions: action.payload,
                loading: false,
                question: {},
                isEdit: false,
                value: ''
            }
        case GET_QUESTION:
            return {
                ...state,
                question: action.payload,
                isEdit: false,
                loading: false
            }
        case DELETE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(question => question._id !== action.payload),
                loading: false
            }
        case ADD_QUESTION:
            return {
                ...state,
                questions: [action.payload, ...state.questions],
                loading: false
            }
        case EDIT_QUESTION:
            return {
                ...state,
                question: action.payload,
                isEdit: false
            }
        case QUESTIONS_LOADING:
            return {
                ...state,
                loading: true
            }
        case IS_EDIT_TRUE_QUESTION:
            return {
                ...state,
                isEdit: true
            }
        case IS_EDIT_FALSE_QUESTION:
            return {
                ...state,
                isEdit: false
            }
        case SEARCH:
            return {
                ...state,
                value: action.payload
            }
            

        default: return state
    }
}