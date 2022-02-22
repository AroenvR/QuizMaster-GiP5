import http from "../service/Axios";

export function getAllResults() {
    return http.get("/results");
}

export function getResultsById(id) {
    return http.get("/results/" + id)
}

export function postResult(object) {
    return http.post("/results", object);
}

export function editResult(id, object) {
    return http.put("/results/" + id, object);
}

export function deleteResult(id) {
    return http.delete("/results/" + id);
}

/*
    {
        result_id : 1,
        quiz_question_id : 1,
        answer_string : "string",
        correct : true,
        start_time : "2022-02-02T08:45:00",
        end_time : "2022-02-02T09:00:00"
    }
*/