import http from "../service/Axios";

export function getAllQuizzes() {
    return http.get("/quizzes");
}

export function getQuizById(id) {
    return http.get("/quizzes/" + id)
}

export function postQuiz(object) {
    return http.post("/quizzes", object);
}

export function editQuiz(id, object) {
    return http.put("/quizzes/" + id, object);
}

export function deleteQuiz(id) {
    return http.delete("/quizzes/" + id);
}

/*
    {
        quiz_id : 1,
        host_id : 1,
        title : "string",
        breaks : 1,
        start_time : "2022-02-02T08:30:00",
        end_time : "2022-02-02T10:00:00"
    }
*/