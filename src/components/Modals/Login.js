import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const Login = (open, toggleSidebar) => {

    const toggle = () => {
        console.log('here')
        toggleSidebar('dont');
    };

    return (
        <Modal isOpen={open} toggle={toggleSidebar}>
            <ModalHeader toggle={toggleSidebar} >Login</ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggleSidebar}>
                    Do Something
                </Button> {' '}
                <Button color="secondary" onClick={toggleSidebar}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default Login;