import React from 'react';
import { useState, useEffect } from 'react';

import swal from 'sweetalert';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { postQuestion, createQuestionDTO } from "./HandleQuestionDTO";

// Creation for a Question of type 2: "True or False".
function CreateTrueOrFalse() {
    const [validated, setValidated] = useState(false); // Form validator.
    const [questionDTO, setQuestionDTO] = useState(createQuestionDTO); //DTO object is constructed in HandleQuestionDTO component.

    // Set question type.
    useEffect(() => { setQuestionDTO({ ...questionDTO, type: 2 }) }, []);
    
    // Checking form before sending DTO to the next handler.
    async function handleSubmit(event) {
        event.preventDefault();

        // Reset Form validation.
        setValidated(true);

        // Send to HandleQuestionDTO component.
        if (!questionDTO.answers instanceof Array || questionDTO.answers.length === 0) {
            swal({
                title: "No answer selected",
                text: "Please select true or false.",
                icon: "warning"
            })
            return;
        }
        
        await postQuestion(questionDTO);
    }

    // Input handlers
    const handleTopicInput = (event) => {
        const { name, value } = event.currentTarget;

        setQuestionDTO({
            ...questionDTO,
            topic: value,
        });
    }

    const handleDescriptionInput = (event) => {
        const { name, value } = event.currentTarget;

        setQuestionDTO({
            ...questionDTO,
            description: value,
        });
    }

    const handleQuestionStringInput = (event) => {
        const { name, value } = event.currentTarget;

        setQuestionDTO({
            ...questionDTO,
            questionString: value,
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
                        placeholder="The world is round."
                        className="text-center"
                        onChange={handleQuestionStringInput}
                    />
                    <Form.Control.Feedback type="invalid">Please fill in the Question.</Form.Control.Feedback>
                </Form.Group>
                
                <p>Select the correct answer:</p>
                <div id="True-Or-False-Btn-Div" alt="Div containing the two 'true' and 'false' buttons.">
                    <Button variant="primary" onClick={() => setQuestionDTO({ ...questionDTO, answers: ["true"] })}>True</Button>

                    <Button variant="primary" onClick={() => setQuestionDTO({ ...questionDTO, answers: ["false"] })}>False</Button>
                </div>

                <p id="True-or-False-Selected-P">Currently selected: {questionDTO.answers}</p>

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

