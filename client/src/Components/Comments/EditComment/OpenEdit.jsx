
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEditTrue } from '../../../actions/commentAction/commentAction2'
import { Button } from 'semantic-ui-react';

export class OpenEdit extends Component {
    render() {
        return (
            <div>
                <Button className="btn8" onClick={() => this.props.isEditTrue(this.props.id)} >Edit</Button>
            </div>
        )
    }
}

export default connect(null, { isEditTrue })(OpenEdit)

