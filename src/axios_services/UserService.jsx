import http from "./Axios";

export function login(email, password) {
    return http.get("/login", {
        headers: {
            "Authorization": "Basic " + btoa(email + ":" + password),
        }
    });
}

export function logout() {
    return http.get("/logout");
}

export function signUp(email, username, password) {
    return http.post("/members", {
        email: email,
        username: username,
        password: password,
    });
}

/*  SignupDTO
    {
        email : "string",
        username : "string",
        password : "string",
    }
*/