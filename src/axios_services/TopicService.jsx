import http from "../axios_services/Axios";

export function getAll() {
    return http.get("/topics");
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