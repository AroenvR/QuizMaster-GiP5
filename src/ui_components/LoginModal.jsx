import React from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { login } from '../axios_services/UserService';
import { handleErrorCode } from '../axios_services/CodeHandler';

import LoginForm from './LoginForm';

//POSSIBLE FUTURE EXPANSION! (WIP) Currently not in use.
const LoginModal = (props) => {
    console.log("modal");
    
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            { "Log in." }
            </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <LoginForm />
        </Modal.Body>

        {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
        </Modal>
    );
}

export default LoginModal;