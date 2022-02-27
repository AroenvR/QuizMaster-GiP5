import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

//TODO: Check for "type" email. Also check as required fields.
const LoginForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        console.log("Not yet implemented.");

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        //TODO: Send to Axios
    }

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