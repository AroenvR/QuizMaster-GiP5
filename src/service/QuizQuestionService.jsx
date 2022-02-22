import http from "../service/Axios";

export function getAllQuizQuestions() {
    return http.get("/quiz-questions");
}

export function getQuizQuestionsById(id) {
    return http.get("/quiz-questions/" + id)
}

export function postQuizQuestion(object) {
    return http.post("/quiz-questions", object);
}

export function editQuizQuestion(id, object) {
    return http.put("/quiz-questions/" + id, object);
}

export function deleteQuizQuestion(id) {
    return http.delete("/quiz-questions/" + id);
}

/*
    {
        quiz_question_id : 1,
        quiz_id : 1,
        question_id : 1
    }
*/