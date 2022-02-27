import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

//TODO: Check for "type" email. Also check as required fields.
//Future Sprint: implement "Forgot Password?" button.
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
                    />
                    <Form.Control.Feedback type="invalid">Please fill in a password.</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log in
                </Button>
            </Form>

            <Nav.Link href="/forgot-password"><Button id="Forgot-Password-Btn" variant="secondary">Forgot Password?</Button></Nav.Link>
            
        </div>
    )
}

export default LoginForm;