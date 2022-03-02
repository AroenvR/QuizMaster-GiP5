import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { signUp } from '../axios_services/UserService';

//TODO: Check for "type" email. Also check as required fields.
const LoginForm = () => {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState(null);

    //Handle sending the input to the backend.
    async function handleSignUp(signupObject) {

        await signUp(signupObject).then((resp) => {
            console.log(resp);
        })
        .catch((ex) => {
            console.log("Exception occurred while logging in.");
            console.log(ex); //TODO: For debugging purposes, do not forget to comment out for Production.
        })
    }

    //When the submit button is clicked, data will be taken from the input hook and sent through Axios to the backend.
    async function handleSubmit(event) {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        await handleSignUp(input);
    }

    //Handle setting the input hook's email value.
    const handleEmailInput = (event) => {
        const { name, value } = event.currentTarget

        setInput({
            ...input,
            email: value,
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

    //Handle setting the input hook's password value.
    const handleUsernameInput = (event) => {
        const { name, value } = event.currentTarget

        setInput({
            ...input,
            username: value,
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

export default LoginForm;