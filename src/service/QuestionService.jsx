import http from "../service/Axios";

export function getAllQuestions() {
    return http.get("/questions");
}

export function getQuestionsById(id) {
    return http.get("/questions/" + id)
}

export function postQuestion(object) {
    return http.post("/questions", object);
}

export function editQuestion(id, object) {
    return http.put("/questions/" + id, object);
}

export function deleteQuestion(id) {
    return http.delete("/questions/" + id);
}

/*
    {
        question_id : 1,
        topic_id : 1,
        member_id : "string",
        question_string : "string",
        description : "string",
        type : "string",
        difficulty : 1,
        requested : false
    }
*/