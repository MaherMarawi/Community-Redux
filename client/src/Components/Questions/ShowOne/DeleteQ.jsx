

import React, { Component } from 'react'
import { Button} from 'semantic-ui-react';
import { connect } from 'react-redux'
import { deleteQuestion } from '../../../actions/questionAction/questionAction1'
export class DeleteQ extends Component {
    onDelete = () => {
        this.props.deleteQuestion(this.props.id)
        if(this.props.loading === false) this.props.push('/community')
    }
    render() {
        return (
            <>
            <table >
                <tbody>
                    <Button className="btn-danger8" onClick={() => this.onDelete()}>Delete</Button>
                </tbody>
            </table>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.question.loading
    }
}

export default connect(mapStateToProps, { deleteQuestion })(DeleteQ)


