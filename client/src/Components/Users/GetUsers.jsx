import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/userAction/userAction'
import IconLoading from '../Auth/AuthFunc/IconLoading'
import UserDetails from './UserDetails'
export class GetUsers extends Component {
    componentDidMount = () => {
        this.props.getUsers()
    }
    render() {
        const { users, loading, user, value } = this.props
        return (
            <div className="backGroundUS">
                {!loading ?
                    <React.Fragment>
                        {value ?
                            <React.Fragment>
                                {users && users
                                    .filter(val => val.email.toLowerCase().includes(value.toLowerCase()))
                                    .map(value => {
                                        return (
                                            <UserDetails key={value._id} user={user} value={value} />
                                        )
                                    })}
                            </React.Fragment>
                            :
                            <React.Fragment>
                                {users && users.map(value => {
                                    return (
                                        <UserDetails key={value._id} user={user} value={value} />
                                    )
                                })}
                            </React.Fragment>}

                    </React.Fragment>
                    :
                    <div style={{ marginLeft: '80%', marginTop: '40%' }} ><IconLoading /></div>}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.user.users,
        loading: state.user.loading,
        user: state.auth.user,
        value: state.user.value
    }
}
export default connect(mapStateToProps, { getUsers })(GetUsers)
