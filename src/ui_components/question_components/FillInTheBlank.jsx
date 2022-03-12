import React from 'react';
import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import { questionDTO } from '../QuizQuestion';

// Backend sent a Question of type 3. This is read by (props) from CreateQuestionPage.jsx
function FillInTheBlank(props) {
    // Setting question properties by import from QuizQuestion.jsx
    const [question, setQuestion] = useState(questionDTO);

    // Setting question values from props passed by parent.
    useEffect(() => { setQuestion(props.value) });

    const handleInput = (event) => {
        const input = event.target.value
        
        // Setting answer in localStorage to pass back to parent. (React does not support passing to parent)
        localStorage.setItem("answer", input);
    }

    //HTML from here on out.
    return (
        <div id="Fill-In-The-Blank-Div" alt="Div containing the 'fill in the blank' form.">
            <h1>{question.quizTitle}</h1>

            <p className='question-description'>{question.description}</p>

            <h3 className='question-string'>{question.questionString}</h3>
            
            <Form id='Fill-In-The-Answer'>
                <FormControl
                    type="text"
                    placeholder="Type your answer here..."
                    className="me-2"
                    aria-label="Search"
                    onChange={handleInput}
                />
            </Form>
        </div>
    )
}

export default FillInTheBlank

