import http from "../service/Axios";

export function getAllAnswers() {
    return http.get("/answers");
}

export function getAnswerById(id) {
    return http.get("/answers/" + id)
}

export function postAnswer(object) {
    return http.post("/answers", object);
}

export function editAnswer(id, object) {
    return http.put("/answers/" + id, object);
}

export function deleteAnswer(id) {
    return http.delete("/answers/" + id);
}

/*
    {
        answer_id : 1,
        question_id : 1,
        correct : true,
        answer_string : "string"
    }
*/