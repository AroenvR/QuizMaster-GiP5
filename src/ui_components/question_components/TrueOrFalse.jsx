import React from 'react';
import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

import { questionDTO } from '../QuizQuestion';

// Backend sent a Question of type 3. This is read by (props) from CreateQuestionPage.jsx
function TrueOrFalse(props) {
    // Setting question properties by import from QuizQuestion.jsx
    const [question, setQuestion] = useState(questionDTO);

    // Setting question values from props passed by parent.
    useEffect(() => { setQuestion(props.value) });

    const handleTrue = () => {
        localStorage.setItem("answer", "true");
    }

    const handleFalse = () => {
        localStorage.setItem("answer", "false");
    }

    //HTML from here on out.
    return (
        <div id="True-Or-False-Div" alt="Div containing the True or False form.">
            <h1>{question.quizTitle}</h1>

            <p className='question-description'>{question.description}</p>

            <h3 className='question-string'>{question.questionString}</h3>

            <div id='True-Or-False-Btns-Div'>
                <Button onClick={handleTrue}>True</Button>
                <Button onClick={handleFalse}>False</Button>
            </div>
        </div>
    )
}

export default TrueOrFalse

