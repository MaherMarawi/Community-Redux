
// import React from 'react'
// import delIcon from '../../img/deleteIcon.jpg'
// import axios from 'axios'

// function DeleteC({comment, comments, setComments, loading, setLoading }) {
//     const onClick = () => {
//         console.log(comment)
//         setLoading(true)
//         axios.delete(`http://localhost:5000/api/RemoveComment/${comment._id}` )
//             .then(result => {console.log(result.data)
//                 const newComments = comments.filter(value => value._id !== comment._id)
//                 setComments(newComments)
//                 setLoading(false)
//             })
//             .catch(err => {setLoading(false)
//                 console.log(err)})
//     }
//     return (
//         <div>
//             <button disabled={loading} style={{border: 'none', textDecoration: 'none'}}>{loading ? 'loading' : <img className='delIcon'  src={delIcon} onClick={() => onClick()} />}</button>
//         </div>
       
//     )
// }
    

// export default DeleteComment

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment } from '../../actions/commentAction/commentAction1'
import { Button } from 'semantic-ui-react';

export class DeleteComment extends Component {
    render() {
        return (
            <div>
                <Button className="btn8" onClick={() => this.props.deleteComment(this.props.id)} >Delete</Button>
            </div>
        )
    }
}

export default connect(null, { deleteComment })(DeleteComment)

