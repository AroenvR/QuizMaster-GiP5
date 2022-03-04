import Break from "./question_components/Break";
import FillInTheBlank from "./question_components/FillInTheBlank";
import MultipleChoice from "./question_components/MultipleChoice"
import TrueOrFalse from "./question_components/TrueOrFalse"
 
const QuizQuestion = () => {

    function renderQuestion(DTO) {
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

let mockedQuestionDTO = {
    question_id: null,
    answers: [
        answerDTOone,
        answerDTOtwo,
        answerDTOthree,
        answerDTOfour,
    ],
    type : 1,
    quiz_title : "Quiz Title",
    question_string : "Question String",
    description : "Question Description",
    break : false,
    topic : "Topic"
}