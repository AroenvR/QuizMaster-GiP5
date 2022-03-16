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

// Validates the values of the given DTO.
function validateDTO(dto) {
    
    // Checking for false values
    if(dto.questionString === null || dto.questionString.trim() === "") {
        // console.log("Failed string");
        return false;
    }
    if(dto.description === null || dto.description.trim() === "") {
        // console.log("Failed desc");
        return false;
    }
    if(dto.topic === null || dto.topic.trim() === "") {
        // console.log("Failed topic");
        return false;
    }
    if(dto.answers instanceof Array && dto.answers.length === 0) { // answer checking for true-or-false happens there.
        // I'm not actually sure if this is still necessary since true-or-false is now an Array as well.
        // Gotta check this when I have time. Doesn't really matter if it's here or not, though.
        // console.log("Failed true-or-false");
        return false;
    }
    
    // Checking for duplicate answers. (if statement is there because 'type 2 true-or-false' question.answers == string, not array)
    if(dto.answers instanceof Array && dto.answers.length > 1) {
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index);

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
                }) // .then on swal is after a button has been clicked.
                .then(() => window.location.href = "/");
            }
        })
        .catch((ex) => {
            handleErrorCode(ex.response);
        });
    }
}