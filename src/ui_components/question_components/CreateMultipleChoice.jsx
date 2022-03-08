import React from 'react';
import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//Recreating the outgoing DTO to have selectable variables in the 'question' hook.
let createQuestionDTO = {
    answers: [],
    type: 1,
    question_string: null,
    description: null,
    topic: null
}

let answers = [""];

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

    const handleCorrectAnswerInput = (event) => {
        const { name, value } = event.currentTarget;

        answers[0] = value;
    
        setAnswersForQuestion(answers);
    }    

    const handleAnswerInput = (event) => {
        const { name, value } = event.currentTarget;

        answers[event.currentTarget.id] = value;
    
        setAnswersForQuestion(answers);
    }

    // const addAnswerToArray = () => {
    //     answers[answers.length] = "";
    // }

    const setAnswersForQuestion = (answers) => {

        setQuestion({
            ...question,
            answers: answers,
        });
    }

    //HTML from here on out.
    return (
        <div className='Create-Custom-Question-Form' alt="Div containing custom question form.">

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

                <Form.Group className="mb-3" controlId="validationForCorrectAnswer">
                    <Form.Label>Correct Answer</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="4"
                        className="text-center"
                        onChange={handleCorrectAnswerInput}
                    />
                    <Form.Control.Feedback type="invalid">Please fill in an Answer.</Form.Control.Feedback>
                </Form.Group>

                <hr className='create-question-hr' />
                <p>Add up to 9 incorrect answers</p>
                <hr />

                {
                    answers.map((ans, index) => {

                        if(index < 9) {
                            return (
                                <Form.Group className="mb-3" controlId={`${index + 1}`} key={index}>
                                    <Form.Label>{`Incorrect Answer ${index + 1}`}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="text-center"
                                        onChange={handleAnswerInput}
                                    />
                                </Form.Group>
                            )
                        }
                    }) 
                }
                <Button 
                    variant="primary" 
                    type="submit"
                >
                    Create question!
                </Button>
            </Form>
        </div>
    )
}

export default CreateMultipleChoice

