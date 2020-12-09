
import React, { Component } from 'react'
import { addComment } from '../../actions/commentAction/commentAction1'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react';

export class AddComment extends Component {
    state = {}
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value} )
    }
    onClick = () => {
        const comment = this.state
        comment.user_name = this.props.user.username
        comment.user_id = this.props.user.id
        this.props.addComment(this.props.id, this.state)
        this.setState({comment: '', userCode: ''})
    }
    render() {
        return (
            <Form className="form8" style={{marginLeft: '20%'}}>
            <Form.Field>
            <h3>Add Comment</h3>
                <input type='text' name='comment' value={this.state?.comment} onChange={this.onChange} className="input8" placeholder='Comment' />
            </Form.Field>
            <Form.Field>
                <textarea type='text' value={this.state?.userCode} name='userCode' onChange={this.onChange} className="input8" placeholder='Some Code'></textarea>
            </Form.Field>
            <Button className="btn8" onClick={() => this.onClick()} >Add</Button>
        </Form>
        )
    }
}

const mapStateToProps = (state => {
    return {
        user: state.auth.user
    }
})

export default connect(mapStateToProps, { addComment })(AddComment)
