import { useState, useRef } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { handleErrorCode } from '../util/CodeHandler';
import { getQuizByCode } from '../axios_services/QuizService';

var style = {
    fontSize: "3rem",
  }

const JoinQuizPage = () => {
    const [validated, setValidated] = useState(false);
    let joinRef = useRef(null);

    // Send quizCode to the backend.
    async function fetchQuizByCode(quizCode) {

        await getQuizByCode(quizCode).then((resp) => {

            if(resp.status === 201) {
                window.location.href = '/quiz';
            }
        })
        .catch((ex) => {
            handleErrorCode(ex.response);
        })
    }

    //When the submit button is clicked, data will be taken from the ref hook and sent through Axios to the backend.
    const handleJoin = (event) => {
        const input = event.currentTarget;

        //Block if the form's validity is false.
        if (input.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            fetchQuizByCode(joinRef.current.value);
        }

        setValidated(true);
    }

    return (
        <div id="Join-Page-Div" alt="Div for the code input field and join btn.">
            <Form noValidate validated={validated} onSubmit={handleJoin} className='mt-3'>

                <Form.Group className="mb-3" controlId="validationForCode">
                    <Form.Label style={style} alt="Styled the size of this text in the JoinQuizPage.jsx file.">Quiz Code:</Form.Label>
                    <Form.Control
                        ref={joinRef}
                        required
                        type="text"
                        placeholder="Enter Code"
                        className="text-center"
                    />
                    <Form.Control.Feedback type="invalid">Please fill in a code.</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Join!
                </Button>
            </Form>
        </div>
    )
}

export default JoinQuizPage
