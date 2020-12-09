import { GET_USERS, SEARCH, LOADING_USERS } from '../actions/types'

const initialState = {
    users: [],
    loading: false,
    value: ''
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                state,
                users: action.payload,
                loading: false,
                value: ''
            }
        case LOADING_USERS:
            return {
                state,
                loading: true
            }
        case SEARCH:
            return {
                ...state,
                value: action.payload
            }

        default:
            return state
    }
}