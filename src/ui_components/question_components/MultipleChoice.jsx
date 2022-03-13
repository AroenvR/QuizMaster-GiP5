import React from 'react';
import { useState, useEffect } from 'react';

import { questionDTO } from '../QuizQuestion';

// Backend sent a Question of type 1. This is read by (props) from CreateQuestionPage.jsx
function MultipleChoice(props) {
    // Setting question properties by import from QuizQuestion.jsx
    const [question, setQuestion] = useState(questionDTO);

    // Setting question values from props passed by parent.
    useEffect(() => { setQuestion(props.value) });

    // Handle selection of an answer.
    const handleSelection = (event) => {
        const answer = event.target.labels[0].textContent;

        // Setting answer in localStorage to pass back to parent. (React does not support passing to parent)
        localStorage.setItem("answer", answer); //TODO: Secure against injection.
    }

    //HTML from here on out.
    return (
        <div id="Multiple-Choice-Div" alt="Div containing the multiple choice form.">
            <h1>{question.quizTitle}</h1>

            <p className='question-description'>{question.description}</p>
            
            <h3 className='question-string'>{question.questionString}</h3>

            { question.answers.map((answer, index) => {
                    return (
                        <div className="form-check multiple-choice-answers" key={index}>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id={index} onChange={handleSelection} />
                            <label className="form-check-label" htmlFor={index}>
                                { answer }
                            </label>
                            <hr />
                        </div>
                    )
                }) 
            }
        </div>
    )
}

export default MultipleChoice

