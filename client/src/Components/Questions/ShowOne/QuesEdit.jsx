import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { editQuestion, isEditFasle } from '../../../actions/questionAction/questionAction2'

export class QuesEdit extends Component {
    componentDidMount = () => {
        const { question } = this.props
        this.setState( question )
    }
    state = {}
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    onClick = () => {
        this.props.editQuestion(this.state)
        this.props.isEditFasle()
    }
    render() {
        const { question } = this.props
        return (
            <Form className="form8" style={{margin:"50px auto"}} >
             <Form.Field>
                 <label>Title</label>
                 <input className="input8" name='title' defaultValue={question.title} onChange={this.onChange} type='text' />
             </Form.Field>
             <Form.Field>
                 <label>Description</label>
                 <textarea name='description' className="input8" rows="3" defaultValue={question.description} onChange={this.onChange} type='text' />
             </Form.Field>
             <Form.Field>
                 <label>Some Code</label>
                 <textarea className="input8" name='userCode' defaultValue={question.userCode} onChange={this.onChange} type='text' />
             </Form.Field>
             <Button className="btn8" onClick={() => this.onClick()}>Edit</Button>
             <Button className="btn8" onClick={() => this.props.isEditFasle()}>Close</Button>
         </Form>
        )
    }
}
export default connect(null, { editQuestion, isEditFasle })(QuesEdit)

