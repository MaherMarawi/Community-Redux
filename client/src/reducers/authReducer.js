import { LOGIN, ERROR, USER_LOAD, REGISTER, LOGOUT } from '../actions/types'

const initialState = {
    token: '',
    user: null,
    authError: null,
    isLoading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                state,
                token: action.payload.accessToken,
                user: action.payload.user,
                authError: null
            }
        case REGISTER:
            return {
                state,
                token: action.payload.accessToken,
                user: action.payload.user,
                authError: null
            }
        case LOGOUT:
            localStorage.removeItem('token')
            sessionStorage.removeItem('user')
            return {
                state,
                user: null,
                token: '',
                authError: null
            }
        case ERROR:
            return {
                state,
                authError: action.payload
            }
        case USER_LOAD:
            return {
                state,
                user: action.payload.user,
                token: action.payload.accessToken,
                authError: null
            }

        default:
            return state
    }
}