import { useState, useRef } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
            // Code has been sent to the backend, handle the returns here. HTTP codes and possible objects.

            console.log(resp); //TODO: For debugging purposes, do not forget to comment out for Production.

            // Check here if response.code 200 success, then redirect.
            // window.location.href = '/quiz';
        })
        .catch((ex) => {
            console.log("Exception fetching quizByCode");

            console.log(ex); //TODO: For debugging purposes, do not forget to comment out for Production.

            // Check the HTTP code here, then handle if necessary.
            //TODO: ResponseEntity Error if Quiz starts at a certain time. "Error: Quiz with code "X12C3" starts on 13/03/2021 at 5:30am." should be made by the backend.

            window.location.href = '/quiz'; //TODO: For presentation purposes, NO NOT forget to remove this.
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
