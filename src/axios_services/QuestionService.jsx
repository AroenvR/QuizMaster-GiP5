import http from "../axios_services/Axios";

export function getNext(memberId, quizId) {
    return http.get("/questions/member?=" + memberId + "quiz?=" + quizId);
}

export function createQuestion(object) {
    return http.post("/questions", object);
}

export function updateQuestion(questionId, object) {
    return http.put("/questions/" + questionId, object);
}

export function deleteQuestion(questionId) {
    return http.delete("/questions/" + questionId);
}

// MOCK data
export function getAllQuestionsForTopic(topic) {
    return http.get("/questions/" + topic);
}

/*  QuestionDTO
    {
        answers {
            //list of strings
        },
        type : 1,
        quiz_title : "string",
        question_string : "string",
        description : "string",
        break : false,
        topic : "string"
    }
*/