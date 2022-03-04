import React from 'react';
import { useState, useEffect } from 'react';

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

function MultipleChoice(props) {
    useEffect(() => { setQuestion(props.value) });
    const [question, setQuestion] = useState(questionDTO);
    const [chosenAnswer, setChosenAnswer] = useState();

    const handleTrue = () => {
        setChosenAnswer("true");
    }

    const handleFalse = () => {
        setChosenAnswer("false");
    }

    const sendToBackend = () => {
        if (chosenAnswer === "true" || chosenAnswer === "false") {
            console.log(chosenAnswer)

            //TODO: Send to Axios, baby!
        } 
    }

    //HTML from here on out.
    //Basic Bootstrap was used for the radio buttons because the component based Bootstrap kept bugging out.
    return (
        <div id="True-Or-False-Div" alt="Div containing the True or False form.">
            <h1>{question.quiz_title}</h1>

            <p className='question-description'>{question.description}</p>

            <h3 className='question-string'>{question.question_string}</h3>

            <div id='True-Or-False-Btns-Div'>
                <Button onClick={handleTrue}>True</Button>
                <Button onClick={handleFalse}>False</Button>
            </div>
            

            <Button className='next-question' variant='success' onClick={sendToBackend}>Next Question!</Button>
        </div>
    )
}

export default MultipleChoice

