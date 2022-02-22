import http from "../service/Axios";

export function getAllTopics() {
    return http.get("/topics");
}

export function getTopicById(id) {
    return http.get("/topics/" + id)
}

export function postTopic(object) {
    return http.post("/topics", object);
}

export function editTopic(id, object) {
    return http.put("/topics/" + id, object);
}

export function deleteTopic(id) {
    return http.delete("/topics/" + id);
}

/*
    {
        topic_id : 1,
        name : "string",
        description : "string"
    }
*/