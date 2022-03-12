import { data } from "jquery";
import { createQuestion } from "../../axios_services/QuestionService";
import { handleErrorCode } from '../../axios_services/CodeHandler';

// Recreating createQuestionDTO to ensure similar properties as the other components.
export let createQuestionDTO = {
    answers: [],
    type: null,
    questionString: null,
    description: null,
    topic: null
}

function validateDTO(dto) {
    
    // Checking for false values

    if(dto.questionString === null || dto.questionString.trim() === "") {
        return false;
    }
    if(dto.description === null || dto.description.trim() === "") {
        return false;
    }
    if(dto.topic === null || dto.topic.trim() === "") {
        return false;
    }
    if(dto.answers instanceof Array && dto.answers.length === 0) { // answer checking for true-or-false happens there.
        return false;
    }
    
    // Checking for duplicate questions. (if statement is there because 'type 2 true-or-false' question.answers == string, not array)
    if(dto.answers instanceof Array) {
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);

        if (findDuplicates(dto.answers).length !== 0) { // Correct Answer is broken @ CreateMultipleChoice
            alert("Please remove duplicate answers."); //This works
            return false;
        }
    }

    return true;
}

// Posting data from Create[QuestionType].jsx
export async function postQuestion(dto) {

    if(validateDTO(dto)) {

        //Send to Axios & handle possible returns
        await createQuestion(dto).then((resp) => {
            if(resp.status === 201) {
                alert("Your question " + dto.questionString + " was successfully created!");
                window.location.href = '/';
            }
        })
        .catch((ex) => {
            handleErrorCode(ex.response);
        });
    }
}