import React from 'react';
import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

//Recreating the incoming DTO to have selectable variables in the 'question' hook.
let questionDTO = {
    question_id: null,
    answers: [],
    type: null,
    quiz_title: null,
    question_string: null,
    description: null,
    break: null,
    topic: null
}

function FillInTheBlank(props) {
    useEffect(() => { setQuestion(props.value) });
    const [question, setQuestion] = useState(questionDTO);
    const [chosenAnswer, setChosenAnswer] = useState(null);

    const handleInput = (event) => {
        const input = event.target.value
        setChosenAnswer(input);
    }

    const sendToBackend = () => {
        if (chosenAnswer !== null && chosenAnswer !== "") {
            console.log(chosenAnswer)

            //TODO: Send to Axios, baby!
        } 
    }

    //HTML from here on out.
    //Basic Bootstrap was used for the radio buttons because the component based Bootstrap kept bugging out.
    return (
        <div id="Fill-In-The-Blank-Div" alt="Div containing the 'fill in the blank' form.">
            <h1>{question.quiz_title}</h1>

            <p className='question-description'>{question.description}</p>

            <h3 className='question-string'>{question.question_string}</h3>
            
            <Form id='Fill-In-The-Answer'>
                <FormControl
                    type="text"
                    placeholder="Type your answer here..."
                    className="me-2"
                    aria-label="Search"
                    onChange={handleInput}
                />
            </Form>
            
            <Button className='next-question' variant='success' onClick={sendToBackend}>Next Question!</Button>
        </div>
    )
}

export default FillInTheBlank

