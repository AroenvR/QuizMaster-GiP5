import React from 'react';
import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

//Recreating the incoming DTO to give to the question hook as a default setting.
let questionDTO = {
    answers: [],
    type: null,
    quiz_title: null,
    question_string: null,
    description: null,
    break: null,
    topic: null
}

const MultipleChoice = () => {
    useEffect(() => { getNext() });
    const [question, setQuestion] = useState(questionDTO);

    async function getNext() {
        setQuestion(mockedQuestionDTO);
        console.log(mockedQuestionDTO);
    }

    //HTML from here on out.
    return (
        <div id="Multiple-Choice-Div" alt="Div containing the multiple choice form for a question.">
            <h1>{question.quiz_title}</h1>
            <p>{question.description}</p>
            <p>{question.question_string}</p>

            {/* <Form>
                { question.answers.map((answer) => {
                        <Form.Check
                            type='radio'
                            // id={answer.answer_id}
                            label={answer.answer_string}
                        >
                        </Form.Check>
                    })
                }
            </Form> */}

            {/* { question.answers.map((answer) => { */}
                    <Form>
                        <Form.Check
                            type='radio'
                            label={'answer.answer_string'}
                        >
                        </Form.Check>

                        <Form.Check
                            type='radio'
                            label={'answer.answer_stringeringer'}
                        >
                        </Form.Check>
                    </Form>
                {/* })
            } */}
            
                
                

                {/* {['checkbox', 'radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                    />

                    <Form.Check
                        disabled
                        type={type}
                        label={`disabled ${type}`}
                        id={`disabled-default-${type}`}
                    />
                    </div>
                ))} */}
            


            
        </div>
    )
}

export default MultipleChoice

/*
working:
{ question.answers.map((answer) => {
                return (
                     <p key={answer.answer_string}>{answer.answer_string}</p>
                    )
                })
            }
            */

//MockDTO's
let answerDTOone = {
    answer_id: 1,
    answer_string : "answer one"
}

let answerDTOtwo = {
    answer_id: 2,
    answer_string : "answer two"
}

let answerDTOthree = {
    answer_id: 3,
    answer_string : "answer three"
}

let answerDTOfour = {
    answer_id: 4,
    answer_string : "answer four"
}

let mockedQuestionDTO = {
    answers: [
        answerDTOone,
        answerDTOtwo,
        answerDTOthree,
        answerDTOfour
    ],
    type : 1,
    quiz_title : "Quiz Title",
    question_string : "Question String",
    description : "Quiz Description",
    break : false,
    topic : "Topic"
}