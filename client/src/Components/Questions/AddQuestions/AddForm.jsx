import React from 'react'
import img from '../../../img/3.png';
import { Button, Form} from 'semantic-ui-react';

function AddForm({onChange, onClick}) {
    return (
        <React.Fragment>
        <div >
        <h1 className="addquestion-title8">Add Question</h1>
        <div className="addquestion-container8">
            <img src={img} alt="photo" />
            <Form className="form8" onSubmit={onClick}>
                <Form.Field>
                    <label>Title</label>
                    <input className="input8" name='title' onChange={onChange} placeholder='Title' />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <textarea name='description' onChange={onChange} className="input8" rows="3"  placeholder='Add a description' ></textarea>
                    
                </Form.Field>
                <Form.Field>
                    <label>Some Code</label>
                    <textarea className="input8" onChange={onChange} name='userCode'  placeholder='Some Code' />
                </Form.Field>
                <Button className="btn8" >Add</Button>
            </Form>

        </div>
    </div>
        </React.Fragment>
    )
}

export default AddForm
