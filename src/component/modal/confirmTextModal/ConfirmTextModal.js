import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AreYouSureToUpdateUserRole} from "../../../constatnts/constants";
import {Col, Input} from "antd";
import '../modal.scss'

class ConfirmTextModal extends React.Component {

    state = {
        confirmMsg: '',
        isDisable: true
    };


    handleInput = (event) => {
        let {name, value} = event.target;
        if (event.target === 'Yes! Update this') {
            this.setState({isDisable: false});
            this.forceUpdate();
        }

        this.setState({[name]: value});
    };

    checkConfirm = () => {
        let confirmMsg = this.state.confirmMsg;
        let isUpdate = false;
        if (confirmMsg.trim() === 'Yes! Update this') {
            isUpdate = true;
            this.props.closeModal();
        } else {
            isUpdate = false
        }
        this.props.confirmMsg(isUpdate);
    };


    render() {
        return <div className="confirmModal">
            <Modal centered isOpen={this.props.isOpen} toggle={() => this.props.closeModal}>

                <ModalBody className='text-center mt-1 mx-2'>
                    <h3>{AreYouSureToUpdateUserRole}</h3>
                    <p>{this.props.msg}</p>
                    <Input
                        id="confirmMsg"
                        value={this.state.confirmMsg}
                        onChange={(e) => this.handleInput(e)}
                        name="confirmMsg"
                        placeholder='Yes! Update this'
                        type="text"
                    />
                </ModalBody>
                <ModalFooter className='d-flex justify-content-between mb-1'>
                    <Button disabled={'Yes! Update this' !== this.state.confirmMsg} color="primary"
                            className='btn-update'
                            onClick={() => this.checkConfirm()}
                    >
                        Update
                    </Button>{' '}
                    <Button color="secondary" className='btn-update' onClick={() => {
                        this.setState({confirmMsg: ''});
                        this.props.closeModal();
                    }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    }
}

export default ConfirmTextModal;