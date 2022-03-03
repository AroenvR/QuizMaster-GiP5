import http from "../axios_services/Axios";

export function getAll() {
    return http.get("/topics");
}

export function getByName(topicName) {
    return http.get("/topics/" + topicName)
}

// export function postTopic(object) {
//     return http.post("/topics", object);
// }

// export function editTopic(id, object) {
//     return http.put("/topics/" + id, object);
// }

// export function deleteTopic(id) {
//     return http.delete("/topics/" + id);
// }

/*  TopicDTO
    {
        name : "string"
    }
*/