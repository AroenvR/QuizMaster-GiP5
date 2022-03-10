import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { login } from '../axios_services/UserService';
import { handleErrorCode } from '../axios_services/CodeHandler';

//Future Sprint: add "Forgot Password?" button's functionality.
const LoginForm = () => {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState(null);

    //Handle logging in with the backend.
    async function handleLogin(email, password) {

        // Sending Login data to the backend.
        await login(email, password).then((resp) => {
            // Login data has been sent to the backend, handle the returns here. HTTP codes and possible objects.

            if (resp.status === 200) {

                // Redirecting to home.
                window.location.href = '/';
            }

            // Check here if response.code 200 success and a Session Cookie exists, then redirect.
            // window.location.href = '/';
        })
        .catch((ex) => {
            // Exception occurred, being handled in CodeHandler.jsx

            handleErrorCode(ex.response);
        })
    }

    //When the submit button is clicked, data will be taken from the input hook and sent through Axios to the backend.
    async function handleSubmit(event) {
        const form = event.currentTarget;

        event.preventDefault();

        // Block if form's Validity is false.
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);

        await handleLogin(input.email, input.password)
    }

    //Handle setting the input hook's email value.
    const handleEmailInput = (event) => {
        const { name, value } = event.currentTarget

        setInput({
            ...input,
            email: value,
        });
    }

    //Handle setting the input hook's password value.
    const handlePasswordInput = (event) => {
        const { name, value } = event.currentTarget

        setInput({
            ...input,
            password: value,
        });
    }

    //HTML from here on out.
    return (
        <div id='Login-Form-Div'>
            <h1>Log in:</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='mt-3'>

                <Form.Group className="mb-3" controlId="validationForEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="example@service.com"
                        className="text-center"
                        onChange={handleEmailInput}
                    />
                    <Form.Control.Feedback type="invalid">Please fill in a correct email.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationForPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="**********"
                        className="text-center"
                        onChange={handlePasswordInput}
                    />
                    <Form.Control.Feedback type="invalid">Please fill in a password.</Form.Control.Feedback>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                
                {/* <Nav.Link className='link-btn forgot-password-link' href="/forgot-password">
                    <Button id="Forgot-Password-Btn" variant="secondary">Forgot Password?</Button>
                </Nav.Link> */}
            </Form>
        </div>
    )
}

export default LoginForm;