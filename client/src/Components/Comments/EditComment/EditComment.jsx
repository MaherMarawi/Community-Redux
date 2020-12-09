
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEditFalse, editComment } from '../../../actions/commentAction/commentAction2'
import { Button, Form } from 'semantic-ui-react';

export class EditComment extends Component {
    componentDidMount = () => {
        const { comment } = this.props
        this.setState( comment )
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    onClick = () => {
        this.props.editComment(this.state)
        this.props.isEditFalse()
    }
    render() {
        const { comment } = this.props
        return (
            <Form className="form8" style={{ margin: "30px auto" }}>
                <Form.Field>
                    <label>Comment</label>
                    <input className="input8" type='text' name='comment' onChange={this.onChange} defaultValue={comment.comment} />
                </Form.Field>
                <Form.Field>
                    <label>Some Code</label>
                    <textarea className="input8" rows="3" type='text' name='userCode' onChange={this.onChange} defaultValue={comment.userCode} />
                </Form.Field>
                <Button className="btn8" onClick={() => this.onClick()} >Edit</Button>
                <Button className="btn8" onClick={() => this.props.isEditFalse()} >Close</Button>
            </Form>
        )
    }
}

export default connect(null, { isEditFalse, editComment })(EditComment)

