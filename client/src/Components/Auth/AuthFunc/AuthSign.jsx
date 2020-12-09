import React, { Component } from 'react'
import { userRegister } from '../../../actions/authAction'
import { connect } from 'react-redux'
import IconLoading from './IconLoading'

class AuthSign extends Component {
    state = {}
    componentDidMount = () => {
        if (this.props.token) this.props.push('/community')
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onClick = () => {
        this.props.userRegister(this.state)
        if (!this.props.error) this.props.push('/community')
    }
    render() {
        return (
            <div>
                <div>
                    <input type='text' placeholder='User Name' name='username' onChange={this.onChange} />
                    <input type='text' placeholder='Email' name='email' onChange={this.onChange} />
                    <p style={{ color: 'red' }}>{this.props.error && this.props.error.email}</p>
                    <input type='password' name='password' placeholder='Password' onChange={this.onChange} />
                    <input type='password' placeholder='RePassword' name='repassword' onChange={this.onChange} />
                    <p style={{ color: 'red' }}>{this.props.error && this.props.error.password}</p>
                    <button className='sign-btn' onClick={() => this.onClick()} >SIGN UP</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        error: state.auth.authError,
        token: state.auth.token
    }
}

export default connect(mapStateToProps, { userRegister })(AuthSign)

// import React, { useState } from 'react'
// import { useForm } from "react-hook-form";
// import axios from 'axios'

// function AuthSign({ url, setLoading }) {
//     const errReq = 'This field is required'
//     const { register, handleSubmit, errors } = useForm();
//     const [backend, setBackEnd] = useState(null)
//     const onSubmit = async (data) => {
//         setLoading(true)
//         await axios.post(url, data)
//             .then(res => {console.log(res.data)
//                 localStorage.setItem('User', JSON.stringify(res.data ))
//                 setLoading(false)
//             })
//             .catch( (err) => { console.log(err.response.data.errors)
//                     setBackEnd(err?.response?.data?.errors);
//                     console.log(backend)
//                     setLoading(false)
//                 })
//     }
//     const validate = value => {
//         if (value.includes('@')) return true
//         return false
//     }
//     return (
//         <>
//             <input name="username" placeholder='username' ref={register} />
//             <input name="email" placeholder='email' defaultValue="" ref={register({ required: true, validate: validate })} />
//             {errors.email && errors.email.type === 'required' && <p className='error'>{errReq}</p>}
//             {backend && backend && <p className='error'>{backend.email}</p>}
//             {errors.email && errors.email.type === 'validate' && <p className='error'>This should be an email</p>}
//             <input name="password" placeholder='password' ref={register({ required: true })} />
//             {errors.password && errors.password.type === 'required' && <p className='error'>{errReq}</p>}
//             <input name="repassword" placeholder='repassword' ref={register({ required: true })} />
//             {errors.repassword && errors.repassword.type === 'required' && <p className='error'>{errReq}</p>}
//             <button onClick={handleSubmit(onSubmit)} className='sign-btn'>SIGN UP</button>
//         </>
//     )
// }
// export default AuthSign






