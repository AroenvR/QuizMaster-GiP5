import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';

import Break from "./question_components/Break";
import FillInTheBlank from "./question_components/FillInTheBlank";
import MultipleChoice from "./question_components/MultipleChoice"
import TrueOrFalse from "./question_components/TrueOrFalse"

import swal from 'sweetalert';

import { getNext } from "../axios_services/QuestionService";
import { handleErrorCode } from '../util/CodeHandler';
 
// Recreating a DTO to give as properties to the question and child component useState hooks.
export const questionDTO = {
    answers: [],
    type : null,
    quizTitle : null,
    questionString : null,
    description : null,
    break : null,
    topic : null
}

// This page manages a player playing a Quiz.
// Backend sends QuestionDTO's with type and break properties.
// Player gets a question or a break depending on that property.
// When a teapot is received, redirect (or render) Results.
const QuizQuestion = () => {
    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState(questionDTO);

    useEffect(() => { requestQuestion(null) }, []);

    // Request a Question or Break from the Backend to render. Sends an answer_string to the backend.
    async function requestQuestion(answerToSend) {
        setLoading(true);

        // console.log(answerToSend);
        
        await getNext(answerToSend).then((resp) => { //TODO: Switch to actual controller when possible
            if(resp.status === 200) {
                setQuestion(resp.data)
            }
        })
        .catch((ex) => {
            if (ex.response.status === 418) { //TEAPOT! Quiz finished. Redirect to Results. 

                // Our backend and I have a running joke with 418 Teapot, we implement it once in every project we make. <3
                swal({
                    title: "Finished",
                    text: "You've finished the Quiz! \nYou can check your results from the home page.",
                    icon: "success"
                }).then(() => window.location.href = "/")
            }
            handleErrorCode(ex.response);
        });

        localStorage.removeItem("answer");

        // Trigger rerendering of the HTML
        setLoading(false);
    }

    // "Next Question!" button was clicked, request a new question.
    // localStorage is filled in by the child component.
    async function requestNext() {
        let answer = localStorage.getItem("answer");

        requestQuestion(answer);
    }

    // Decide which component to render depending on the received QuestionDTO.
    // if break == true, show break component.
    // else, give the corresponding question type depending on QuestionDTO.type with the DTO as parameter.
    function renderQuestion() { //Change DTO to question (hook)
        if (loading) {
            return <div>Quiz loading.</div>
        }

        if (!question.break) {
            switch (question.type) {
                case 1:
                    return(<MultipleChoice value={question} />);

                case 2:
                    return(<TrueOrFalse value={question} />);

                case 3:
                    return(<FillInTheBlank value={question} />);

                default:
                    return(<h1>Something went wrong getting the question.</h1>);
            }
        }
        return(<Break />);
    }

    // HTML from here on out.
    return (
        <div id="Quiz-Question-Container" alt="Div containing the questions">
            { renderQuestion() } 
            <Button id='Next-Question-Btn' variant='success' onClick={requestNext}>Next Question!</Button>
        </div>
    )
}

export default QuizQuestion