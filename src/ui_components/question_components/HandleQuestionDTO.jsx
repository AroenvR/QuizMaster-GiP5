import swal from 'sweetalert';

import { createQuestion } from "../../axios_services/QuestionService";
import { handleErrorCode } from '../../util/CodeHandler';

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
    
    // Checking for duplicate answers. (if statement is there because 'type 2 true-or-false' question.answers == string, not array)
    if(dto.answers instanceof Array) {
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);

        if (findDuplicates(dto.answers).length !== 0) {
            swal({
                title: "Duplicate answers",
                text: "Please remove duplicate answers.",
                icon: "warning"
            })
            return false;
        }
    }

    return true;
}

// Posting data from Create[QuestionType].jsx
export async function postQuestion(dto) {

    if(validateDTO(dto)) {

        //Send to the backend.
        await createQuestion(dto).then((resp) => {
            if(resp.status === 201) {
                swal({
                    title: "Created!",
                    text: "Your question " + dto.questionString + " was successfully created!",
                    icon: "success"
                })
                window.location.href = '/';
                // TODO: If you ever come back around to this, change quizTitle to backend's title and not the frontend one. Minor difference, but it's a difference.
                // CreateQuizForm's annoying developer found us!
            }
        })
        .catch((ex) => {
            handleErrorCode(ex.response);
        });
    }
}