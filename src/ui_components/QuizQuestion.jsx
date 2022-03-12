import { useEffect, useState } from 'react';

import Break from "./question_components/Break";
import FillInTheBlank from "./question_components/FillInTheBlank";
import MultipleChoice from "./question_components/MultipleChoice"
import TrueOrFalse from "./question_components/TrueOrFalse"

import { getNext } from "../axios_services/QuestionService";
 
// Recreating a DTO to give as properties to the question useState hook.
let QuestionDTO = {
    question_id: null,
    answers: [],
    type : null,
    quiz_title : null,
    question_string : null,
    description : null,
    break : null,
    topic : null
}

// This page manages a player playing a Quiz.
// Backend sends QuestionDTO's with type and break properties.
// Player gets a question or a break depending on that property.
// Any click is a request to the backend with the previous question's answer string as value. The return from backend will be a new Question.
// Children already get a DTO so POSTing will be handled by them. It's also a very easy post to handle.
// Child Components are from question_components folder. 
const QuizQuestion = () => {
    useEffect(() => { getQuestion() }, []);
    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState(QuestionDTO);

    // Request a Question or Break from the Backend to render. Sends an answer_string to the backend.
    async function getQuestion() {
        setLoading(true);

        console.log('Get next is a WIP');

        // This is looping endlessly for some reason. EDIT: should be fixed?
        // await getNext().then((resp) => {
        //     // const { name, value } = resp.data; // Probably not the way to fix it but problems for later.

        //     // setQuestion({
        //     //     ...question,
        //     //     [name]: value,
        //     // });
        // })
        // .catch((ex) => {
        //     // console.log(ex);
        // })

        setLoading(false);
    }

    // Decide which component to render depending on the received QuestionDTO.
    // if break == true, show break component.
    // else, give the corresponding question type depending on QuestionDTO.type with the DTO as parameter.
    function renderQuestion(DTO) { //Change DTO to question (hook)
        if (loading) {
            return <div>Quiz loading.</div>
        }

        if (!DTO.break) {
            switch (DTO.type) {
                case 1:
                    return(<MultipleChoice value={DTO} />);
                case 2:
                    return(<TrueOrFalse value={DTO} />);
                case 3:
                    return(<FillInTheBlank value={DTO} />);
                default:
                    return(<h1>Something went wrong getting the question.</h1>);
            }
        }
        return(<Break />);
    }

    // HTML from here on out.
    // TODO: Stop working with the MockDTO's when possible.
    return (
        <div id="Quiz-Question-Container" alt="Div containing the questions">
            { renderQuestion(mockedQuestionDTO) } 
        </div>
    )
}

export default QuizQuestion

//MockDTO's
let answerDTOone = {
    answer_id: 0,
    answer_string : "answer one"
}

let answerDTOtwo = {
    answer_id: 1,
    answer_string : "answer two"
}

let answerDTOthree = {
    answer_id: 2,
    answer_string : "answer three"
}

let answerDTOfour = {
    answer_id: 3,
    answer_string : "answer four"
}

let answerDTOfive = {
    answer_id: 4,
    answer_string : "answer five"
}

let mockedQuestionDTO = {
    question_id: null,
    answers: [
        answerDTOone,
        answerDTOtwo,
        answerDTOthree,
        answerDTOfour,
        // answerDTOfive
    ],
    type : 1,
    quiz_title : "Quiz Title",
    question_string : "Question String",
    description : "Question Description",
    break : false,
    topic : "Topic"
}