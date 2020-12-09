import { GET_COMMENTS, SEARCH, IS_EDIT_TRUE_COMMENT, IS_EDIT_FALSE_COMMENT, EDIT_COMMENT, ADD_COMMENT, DELETE_COMMENT, COMMENTS_LOADING } from '../actions/types'

const initialState = {
    comments: [],
    loading: false,
    isEdit: '',
    value: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                loading: false,
                value: ''
            }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment._id !== action.payload)
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: [action.payload, ...state.comments]
            }
        case EDIT_COMMENT:
            return {
                ...state,
                comments: action.payload,
                isEdit: ''
            }
        case COMMENTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case IS_EDIT_TRUE_COMMENT:
            return {
                ...state,
                isEdit: action.payload
            }
        case IS_EDIT_FALSE_COMMENT:
            return {
                ...state,
                isEdit: ''
            }
        case SEARCH:
            return {
                ...state,
                value: action.payload
            }

        default: return state
    }
}