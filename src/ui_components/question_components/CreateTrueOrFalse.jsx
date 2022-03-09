import React from 'react';
import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//Recreating the outgoing DTO to have selectable variables in the 'question' hook.
let createQuestionDTO = {
    answers: [],
    type: 3,
    question_string: null,
    description: null,
    topic: null
}

function CreateTrueOrFalse() {
    const [validated, setValidated] = useState(false);
    const [question, setQuestion] = useState(createQuestionDTO);
    
    // Backend
    async function handleSubmit(event) {
        const form = event.currentTarget;

        console.log(question);

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

    // These should be removable, check this when you get around to it.
    // const setAnswerToTrue = () => {
    //     setQuestion({
    //         ...question,
    //         answers: "true"
    //     })
    // }

    // const setAnswerToFalse = () => {
    //     setQuestion({
    //         ...question,
    //         answers: "false"
    //     })
    // }

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
                        placeholder="The world is round."
                        className="text-center"
                        onChange={handleQuestionStringInput}
                    />
                    <Form.Control.Feedback type="invalid">Please fill in the Question.</Form.Control.Feedback>
                </Form.Group>
                
                <div id="True-Or-False-Btn-Div" alt="Div containing the two 'true' and 'false' buttons.">
                    <Button variant="success" onClick={() => setQuestion({ ...question, answers: "true" })}>True</Button>

                    <Button variant="success" onClick={() => setQuestion({ ...question, answers: "false" })}>False</Button>
                </div>

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

export default CreateTrueOrFalse

