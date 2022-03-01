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

    async function fetchQuizByCode(quizCode) {

        await getQuizByCode(quizCode).then((resp) => {
            console.log(resp);
        })
        .catch((ex) => {
            console.log("Exception fetching quizByCode");
            console.log(ex);
        })
    }

    const handleJoin = (event) => {
        const input = event.currentTarget;

        if (input.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            fetchQuizByCode(joinRef.current.value);
        }
        setValidated(true);

        //TODO: Send to Axios
        //TODO: Error if no quiz was found by that code
        //TODO: Error if Quiz starts at a certain time. "Error: Quiz with code "X12C3" starts on 13/03/2021 at 5:30am."
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
