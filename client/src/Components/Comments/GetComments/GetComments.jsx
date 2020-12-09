import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../../../actions/commentAction/commentAction1'
import CommentDetails from './CommentDetails'
import IconLoading from '../../Auth/AuthFunc/IconLoading'
import AddComment from '../AddComment'

export class GetComments extends Component {
    componentDidMount = () => {
        const id = this.props.id
        this.props.getComments(id)
    }
    render() {
        const { comments, loading, id, value } = this.props
        return (
            <div>
                {!loading ?
                    <div>
                        {value ? comments && comments
                            .filter(val => val.comment.toLowerCase().includes(value.toLowerCase()))
                            .map(comment =>
                                <React.Fragment>
                                    <CommentDetails key={comment._id} comment={comment} />
                                </React.Fragment>
                            ) : <React.Fragment>
                                {comments && comments.map(comment => {
                                    return (
                                        <CommentDetails comment={comment._id} comment={comment} />
                                    )
                                })}
                            </React.Fragment>}
                    </div> :
                    <div>
                        <IconLoading />

                    </div>}
                {this.props.token ? <AddComment id={id} /> : null}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        comments: state.comment.comments,
        loading: state.comment.loading,
        token: state.auth.token,
        value: state.comment.value
    }
}
export default connect(mapStateToProps, { getComments })(GetComments)

