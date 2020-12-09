import React, { Component } from 'react'
import { userLogin } from '../../../actions/authAction'
import { connect } from 'react-redux'
import IconLoading from './IconLoading'

class AuthLog extends Component {
    state = {}
    componentDidMount = () => {
        const { token } = this.props
        console.log(this.props)
        if (token) this.props.push('/')
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onClick = () => {
        this.props.userLogin(this.state)

        if (!this.props.error) this.props.push('/community')

    }
    render() {
        return (
            <div>

                <React.Fragment>
                    <br></br>
                    <input type='text' placeholder='Email' name='email' value={this.state.email} onChange={this.onChange} />

                    <p style={{ color: 'red' }}>{this.props.error && this.props.error.email}</p>
                    <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.onChange} />
                    <p style={{ color: 'red' }}>{this.props.error && this.props.error.password}</p>

                    <button className='sign-btn' onClick={() => this.onClick()} >LOGIN</button>
                </React.Fragment>

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

export default connect(mapStateToProps, { userLogin })(AuthLog)



// import React, { useState } from 'react'
// import { useForm } from "react-hook-form";
// import axios from 'axios'

// function AuthSign({ url, setLoading }) {
//     const errReq = 'This field is required'
//     const [password, setPassword] = useState('')
//     const [backend, setBackend] = useState('')
//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = async (data) => {
//         setLoading(true)
//         await axios.post(url, data)
//             .then(res => {console.log(res.data)
//                 localStorage.setItem('User', JSON.stringify(res.data ))
//                 setLoading(false)
//             })
//             .catch(err => {
//                 console.log(err?.response?.data?.errors)
//                 const email = err?.response?.data?.errors?.email
//                 setPassword(err?.response?.data?.errors?.password)
//                 // setBackend(password)
//                 setLoading(false)
//                 // console.log(backend)
//                 console.log(password)
//             })
//     };
//     const validate = value => {
//         if (value.includes('@')) return true
//         return false
//     }
//     return (
//         < >
//             <input
//                 name="email" placeholder='email' defaultValue="" ref={register({ required: true, validate: validate })} />
//             {errors.email && errors.email.type === 'required' && <p className='error'>{errReq}</p>}
//             {backend && backend.email && <p className='error'>{backend.email}</p>}
//             {errors.email && errors.email.type === 'validate' && <p className='error'>This should be an email</p>}
//             <input name="password" placeholder='password' ref={register({ required: true })} />
//             {errors.password && errors.password.type === 'required' && <p className='error'>{errReq}</p>}

//             <button className='sign-btn' onClick={handleSubmit(onSubmit)} >LOG IN</button>
//         </>
//     )
// }
// export default AuthSign
