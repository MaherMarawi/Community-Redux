import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchQuestions } from '../../actions/questionAction/questionAction1'
import { searchComments } from '../../actions/commentAction/commentAction2'
import { searchUsers } from '../../actions/userAction/userAction'

export class Search extends Component {
    state = {
        search: ''
    }
    componentDidMount = () => {
        this.setState({search: ''})
    }
    onChange = (e) => {
        this.setState({search: e.target.value})
        this.props.searchQuestions(e.target.value)
        this.props.searchComments(e.target.value)
        this.props.searchUsers(e.target.value)
    }
    render() {
        return (
            <div >
                <input value={this.state.search} style={{display:'overFlow', marginTop: '12px', marginLeft: '350px', height:'30px', padding: '15px', marginRight: '-50px'}} typeof='text' placeholder='Search' onChange={this.onChange} />
            </div>
        )
    }
}

export default connect(null, { searchQuestions, searchComments, searchUsers })(Search)
