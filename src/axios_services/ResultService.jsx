import http from "../axios_services/Axios";

export function getResult(quizCode) {
    return http.get("/results/?code=" + quizCode); //TODO: Check this URL.
}

// export function getTotalQuizScore(quizId) {
//     return http.get("/score/" + quizId)
// }

// export function postResult(object) {
//     return http.post("/results", object);
// }

// export function editResult(id, object) {
//     return http.put("/results/" + id, object);
// }

// export function deleteResult(id) {
//     return http.delete("/results/" + id);
// }

/*  FeedbackDTO
    {
        question_strings {
            //list of strings
        },
        correctAnswers {
            //list of strings
        },
        answersGiven {
            //list of strings
        },
        timeTaken : 1
    }
*/