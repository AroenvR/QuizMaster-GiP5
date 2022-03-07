import { useEffect, useState } from 'react';

import Break from "./question_components/Break";
import FillInTheBlank from "./question_components/FillInTheBlank";
import MultipleChoice from "./question_components/MultipleChoice"
import TrueOrFalse from "./question_components/TrueOrFalse"

import { getNext } from "../axios_services/QuestionService";
 
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

const QuizQuestion = () => {
    useEffect(() => { getQuestion() });
    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState(QuestionDTO);

    async function getQuestion() {
        setLoading(true);

        console.log('Get next is a WIP');

        // This is looping endlessly for some reason.
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

let answerDTOfive = {
    answer_id: 5,
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
    type : 3,
    quiz_title : "Quiz Title",
    question_string : "Question String",
    description : "Question Description",
    break : false,
    topic : "Topic"
}