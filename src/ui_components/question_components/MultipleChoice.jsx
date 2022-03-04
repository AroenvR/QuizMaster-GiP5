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
    const [chosenAnswer, setChosenAnswer] = useState(null);

    const handleSelection = (event) => {
        const answerId = event.target.labels[0].textContent;

        setChosenAnswer(answerId);
    }

    const sendToBackend = () => {

        if (chosenAnswer !== null && chosenAnswer !== "") {
            console.log(chosenAnswer)
            //TODO: Send to Axios, baby!
        }
    }

    //HTML from here on out.
    return (
        <div id="Multiple-Choice-Div" alt="Div containing the multiple choice form.">
            <h1>{question.quiz_title}</h1>

            <p className='question-description'>{question.description}</p>
            
            <h3 className='question-string'>{question.question_string}</h3>

            { question.answers.map((answer) => {
                    return (
                        <div className="form-check multiple-choice-answers" key={answer.answer_id}>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id={answer.answer_id} onChange={handleSelection} />
                            <label className="form-check-label" htmlFor={answer.answer_id}>
                                { answer.answer_string }
                            </label>
                            <hr />
                        </div>
                    )
                }) 
            }

            <Button className='next-question' variant='success' onClick={sendToBackend}>Next Question!</Button>
        </div>
    )
}

export default MultipleChoice

