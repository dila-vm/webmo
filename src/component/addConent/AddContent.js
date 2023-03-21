import {X} from "react-feather";
import {FormGroup, Input, Label} from "reactstrap";
import React from "react";
import './style.scss'
import {Col} from "antd";
import EditableDndList from "editable-dnd-list";

class AddQuestionContent extends React.Component {

    state = {
        answerType: '',
        answers: []
    };


    getAnswerType = async (e) => {
        await this.setState({answerType: e.target.name})

    };
    handleChange = (items: Task[]) => console.log({items});

    render() {
        console.log(this.state.answerType)
        let {index, questionId, removeContent} = this.props
        let {answerType} = this.state
        return (<div className='question-add-wrapper'>
            <div className="d-flex justify-content-between"><h5>Question Content</h5>
                <X size={14} color={'red'}
                   className='btn-close'
                   onClick={(index) => {
                       this.props.closeModal(this.props.index);
                   }}/>
            </div>

            <Label for="question">
                Question
            </Label>
            <Input
                id="question"
                onChange={(e) => this.handleInput(e)}
                name="question"
                placeholder="question"
                type="text"
            />
            <div className="mt-1">

                <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                    <Label for="discount">
                        Answer Type
                    </Label>
                    <br/>
                    <div className="d-flex justify-content-between ">
                        <FormGroup check>
                            <Input
                                name="text"
                                type="radio"
                                checked={'text' === answerType}
                                onChange={this.getAnswerType}
                            />
                            {' '}
                            <Label check>
                                Text Field
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                checked={'textarea' === answerType}
                                onChange={this.getAnswerType}
                                name="textarea"
                                type="radio"
                            />
                            {' '}
                            <Label check>
                                Text Area
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Input
                                checked={'Radio' === answerType}
                                name="Radio"
                                type="radio"
                                onChange={this.getAnswerType}
                            />
                            {' '}
                            <Label check>
                                Radio
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Input
                                name="CheckBox"
                                checked={'CheckBox' === answerType}
                                type="radio"
                                onChange={this.getAnswerType}
                            />
                            {' '}
                            <Label check>
                                Check Box
                            </Label>
                        </FormGroup>
                    </div>

                </Col>

                {answerType === 'Radio' &&
                <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                    <Label for="discount">
                        <hr/>
                        <span style={{capitalize: 'uppercase'}}> <b>{answerType} </b> </span> <b> answers </b>
                        <hr/>
                    </Label>
                    <br/>
                    <EditableDndList items={this.state.answers} onChange={this.handleChange}/>

                </Col>}
                {answerType === 'CheckBox' &&
                <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                    <Label for="discount">
                        <hr/>
                        <span style={{capitalize: 'uppercase'}}> <b>{answerType} </b> </span> <b> answers </b>
                        <hr/>
                    </Label>
                    <br/>
                    <EditableDndList items={this.state.answers} onChange={this.handleChange}/>
                </Col>}

            </div>
        </div>)
    }
}

export default AddQuestionContent;