import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQuestion } from '../../../actions/questionAction/questionAction2'
import AddForm from './AddForm';

export class AddQuestions extends Component {
    componentDidMount = () => {
        const token  = localStorage.getItem('token')
         if(!token) this.props.history.push('/Auth/LogIn')
    }
    state = {
        title: '',
        description: '',
        userCode: ''
    }
    onChange = (e) => { this.setState(state => ({
        [e.target.name]: e.target.value
    })) }
    onClick = () => {
        const question = this.state
        question.user_id = this.props.user?.id
        question.user_name = this.props.user?.username
        console.log(question)
        this.props.addQuestion(question)
        if(this.props.loading === false && (this.state.title !== '' && this.state.description)) this.props.history.push('/community')
    }
    render() {
        return (
            <AddForm onChange={this.onChange} onClick={() => this.onClick()} />
        )
    }
}
const mapSateToProps = (state) => {
    return {
        loading: state.question.loading,
        user: state.auth.user,
        token: state.auth.token
    }
}

export default connect(mapSateToProps, { addQuestion })(AddQuestions)
