import http from "../axios_services/Axios";

export function getAll() {
    return http.get("/topics");
}

export function getByName(topicName) {
    return http.get("/topics/" + topicName)
}

// MOCK data:
export function getAllFakes() {
    return http.get("/fake-topics");
}

/*  TopicDTO
    {
        name : "string"
    }
*/