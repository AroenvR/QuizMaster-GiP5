import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { signUp } from '../axios_services/UserService';
import { handleErrorCode } from '../util/CodeHandler';

const SignUpForm = () => {
    // Hooks!
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState(null);

    //Handle sending the input to the backend.
    async function handleSignUp(email, username, password) {

        // Sending User data to the backend.
        await signUp(email, username, password).then((resp) => {
            // User data has been sent to the backend, redirecting if succesfsful (successful, I can't type apparently).

            // If user was successfully created, redirect to home.
            if (resp.status === 201) {
                window.location.href = '/';
            }
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
        
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);

        await handleSignUp(input.email, input.username, input.password);
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
    const handleUsernameInput = (event) => {
        const { name, value } = event.currentTarget

        setInput({
            ...input,
            username: value,
        });
    }

    //Handle setting the input hook's username value.
    const handlePasswordInput = (event) => {
        const { name, value } = event.currentTarget

        setInput({
            ...input,
            password: value,
        });
    }

    //HTML from here on out.
    return (
        <div id='Sign-Up-Form-Div'>
            <h1>Create an account:</h1>
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
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationForUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Username"
                        className="text-center"
                        onChange={handleUsernameInput}
                    />
                    <Form.Control.Feedback type="invalid">Please fill in a username.</Form.Control.Feedback>
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
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignUpForm;