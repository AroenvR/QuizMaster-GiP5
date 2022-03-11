import http from "../axios_services/Axios";

export function getQuizByCode(quizCode) {
    return http.get("/quizzes/?code=" + quizCode);
}

// export function getQuizById(quizId) {
//     return http.get("/quizzes/" + quizId)
// }

export function createQuiz(object) {
    return http.post("/quizzes", object);
}

// export function editQuiz(id, object) {
//     return http.put("/quizzes/" + id, object);
// }

// export function deleteQuiz(quizId) {
//     return http.delete("/quizzes/" + quizId);
// }

/*  QuizDTO
    {
        quiz_title : "string",
        start_time : "2022-02-02T08:30:00",
        end_time : "2022-02-02T10:00:00"
        breaks : 1,
        questions {
            //List of QuestionDTOs
        }
    }
*/