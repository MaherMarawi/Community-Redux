import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestion } from '../../../actions/questionAction/questionAction1'
import { isEditTrue, isEditFasle } from '../../../actions/questionAction/questionAction2'
import { Button } from 'semantic-ui-react';
import DeleteQ from './DeleteQ'
import QuesEdit from './QuesEdit'
import GetComments from '../../Comments/GetComments/GetComments'
import UserCode from '../../UserCode/UserCode'
import Moment from '../../GetMoment'
import IconLoading from '../../Auth/AuthFunc/IconLoading'

export class ShowOne extends Component {
    componentDidMount = () => {
        const id = this.props.match.params.id
        this.props.getQuestion(id)
    }
    render() {
        const { question, isEdit, user, loading } = this.props
        return (
            <div className="backgroundSO">
                {!loading ? 
                <div>
                {!isEdit ? 
                    <div className="showone-container8">
                    <div>
                    <Moment>{question && question.createdAt}</Moment>
                    <h3 style={{color:"var(--secondary-color)" }}>{question && question.title}</h3>
                    <h5>{question && question.description}</h5>
                {question.userCode ?  
                <div className='userCode-question'>
                    <UserCode>{question && question.userCode}</UserCode>
                </div>
                : <p></p>}
                    </div>
                    
                <div className="choices" >
                <h4>{question && question.user_name}</h4>
                    {user?.id == question.user_id ?
                        <div>
                            <DeleteQ id={question._id} push={this.props.history.push} />
                            <Button className="btn8" onClick={() => this.props.isEditTrue()}> Edit</Button>
                        </div> 
                        : ''}
                </div>
                    </div>
                    : <React.Fragment>
                    <Button className="btn8" onClick={() => this.props.isEditFasle()}>Close</Button>
                    <QuesEdit question={question} />
                    </React.Fragment>}
                <h2 style={{marginLeft:'5%'}} >Comments:</h2>
                    <div>
                    <GetComments id={this.props.match.params.id} />
                </div>
                </div>
                : <IconLoading />}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        question: state.question.question,
        isEdit: state.question.isEdit,
        user: state.auth.user,
        loading: state.question.loading
    }
}
export default connect(mapStateToProps, { getQuestion, isEditTrue, isEditFasle })(ShowOne)


