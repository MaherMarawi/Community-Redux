import { LOGIN, ERROR, USER_LOAD, REGISTER, LOGOUT } from './types'
import axios from 'axios'

export const userLogin = (cred) => dispatch => {
    axios.post('http://localhost:5000/api/Login', cred)
        .then( user => {
            localStorage.setItem('token', user.data.accessToken)
            JSON.stringify(sessionStorage.setItem('user', user.data.user)) 
            dispatch({ type: LOGIN, payload: user.data})
    })
    .catch ( err => {
        dispatch({type: ERROR, payload: err?.response && err?.response?.data?.errors})} )
}



export const userRegister = (cred) => dispatch => {
    axios.post('http://localhost:5000/api/SignUp', cred)
        .then( user => {
            localStorage.setItem('token', user.data.accessToken)
            JSON.stringify(sessionStorage.setItem('user', user.data.user)) 
            dispatch({ type: REGISTER, payload: user.data})
    })
    .catch ( err => dispatch({type: ERROR, payload: err?.response && err?.response?.data?.errors}))
}

export const userLogout = () => dispatch => {
    axios.get('http://localhost:5000/api/Logout', { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}` }})
        .then( user => {
            dispatch({ type: LOGOUT })
    })
}
export const userLoad = () => dispatch => {
    const token = localStorage.getItem('token')
    axios.get('http://localhost:5000/api/checkUser', { headers: {"jwt" : `${token}` }})
        .then ( res => {
            console.log(res.data)
            dispatch({ type: USER_LOAD, payload: res.data })
        })
    
}