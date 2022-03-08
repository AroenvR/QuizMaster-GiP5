import React from 'react';
import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

//Recreating the outgoing DTOs to have selectable variables in the 'question' hook.
let createQuestionDTO = {
    answers: [],
    type: 1,
    question_string: null,
    description: null,
    topic: null
}

let answers = [null, null];

// Getting close, although the DTO's are somehow linked and being updated to the same values. Also, not rendering any extra Answer inputs yet. Maybe create DTO with the input, and then add?

function CreateMultipleChoice() {
    const [validated, setValidated] = useState(false);
    const [question, setQuestion] = useState(createQuestionDTO);
    
    // Backend
    async function handleSubmit(event) {
        const form = event.currentTarget;

        event.preventDefault();

        // Block if form's Validity is false.
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);

        // Send to Axios.
    }

    // Input handlers
    const handleTopicInput = (event) => {
        const { name, value } = event.currentTarget;

        setQuestion({
            ...question,
            topic: value,
        });
    }

    const handleDescriptionInput = (event) => {
        const { name, value } = event.currentTarget;

        setQuestion({
            ...question,
            description: value,
        });
    }

    const handleQuestionStringInput = (event) => {
        const { name, value } = event.currentTarget;

        setQuestion({
            ...question,
            question_string: value,
        });
    }

    // Handling answer array for the next few functions.

    const handleAnswerInput = (event) => {
        const { name, value } = event.currentTarget;

        answers[event.currentTarget.id] = value;
    
        setAnswersForQuestion(answers);
    }

    const setAnswersForQuestion = (answerArray) => {

        setQuestion({
            ...question,
            answers: answerArray,
        });
    }

    const addAnswerToArray = () => {
        console.log("clicked")
        answers.push(null);
    }

    console.log(question);

    //HTML from here on out.
    return (
        <div id="Create-Multiple-Choice-Div" alt="Div containing creation for a 'multiple choice' question.">


            <Form noValidate validated={validated} onSubmit={handleSubmit} className='mt-3'>

                <Form.Group className="mb-3" controlId="validationForTopic">
                    <Form.Label>Question Topic</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Topic name"
                        className="text-center"
                        onChange={handleTopicInput}
                    />
                    <Form.Control.Feedback type="invalid">Please fill in a Topic name.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationForDescription">
                    <Form.Label>Question Description</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Select the correct answer"
                        className="text-center"
                        onChange={handleDescriptionInput}
                    />
                    <Form.Control.Feedback type="invalid">Please fill in a Description.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationForQuestion">
                    <Form.Label>Question</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="How much is 2 + 2?"
                        className="text-center"
                        onChange={handleQuestionStringInput}
                    />
                    <Form.Control.Feedback type="invalid">Please fill in the Question.</Form.Control.Feedback>
                </Form.Group>

                { 
                    answers.map((ans, index) => {
                        console.log("index :" + index);

                        return (
                            <Form.Group className="mb-3" controlId={`${index}`} key={index}>
                                <Form.Label>{`Answer ${index + 1}`}</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="4"
                                    className="text-center"
                                    onChange={handleAnswerInput}
                                />
                                <Form.Control.Feedback type="invalid">Please fill in an Answer.</Form.Control.Feedback>
                            </Form.Group>
                        )
                    }) 
                }

                <div id='Create-Multiple-Choice-Buttons-Div' alt="Div containing the Add Answer and Create! buttons.">
                    <Button 
                        variant="dark"
                        onClick={addAnswerToArray}
                    >
                        Add another Answer
                    </Button>

                    <Button 
                        variant="primary" 
                        type="submit"
                    >
                        Create!
                    </Button>
                </div>
            </Form>

            {/* <h1>{question.quiz_title}</h1>

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
            
            <Button className='next-question' variant='success' onClick={sendToBackend}>Next Question!</Button> */}
        </div>
    )
}

export default CreateMultipleChoice

