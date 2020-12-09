import React, { Component } from 'react'
import Question from './Question'
import IconLoading from '../../Auth/AuthFunc/IconLoading'
import { connect } from 'react-redux'
import { getQuestions } from '../../../actions/questionAction/questionAction1'

export class HomePage extends Component {
    componentDidMount = () => {
        this.props.getQuestions()
    }
    render() {
        const { questions, loading, value } = this.props.question
        return (
            <div className="questions">
                {!loading ?
                    <React.Fragment>
                        {value ? questions
                            .filter(val => val.title.toLowerCase().includes(value.toLowerCase()))
                            .map(ques =>
                                <React.Fragment>
                                    <Question key={ques._id} value={ques} />
                                </React.Fragment>
                            ) : <React.Fragment>
                                {questions && questions.map(ques => {
                                    return (
                                        <Question key={ques._id} value={ques} />
                                    )
                                })}
                            </React.Fragment> }
                    </React.Fragment>
                    : <div style={{ marginLeft: '115%', marginTop: '30%' }} >
                        <IconLoading />
                    </div>}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        question: state.question,
        loading: state.loading,
        value: state.question.value
    }
}
export default connect(mapStateToProps, { getQuestions })(HomePage)

