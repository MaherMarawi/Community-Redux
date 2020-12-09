

import React, { Component } from 'react'
import { userLogout } from '../../../actions/authAction'
import { connect } from 'react-redux'

export class AuthOut extends Component {
    componentDidMount = () => {
        this.props.userLogout()
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <p>loading</p>
            </div>
        )
    }
}

export default connect(null, { userLogout })(AuthOut)

