import http from "./Axios";

let basic = require('basic-authorization-header');

export function login(email, password) {
    return http.post("/login", null, {
        headers: {
            "Authorization": basic(email, password),
        }
    });
}

export function logout() {
    return http.post("/logout")
}

export function signUp(object) {
    return http.post("/sign-up" + object)
}

/*  SignupDTO
    {
        email : "string",
        username : "string",
        password : "string",
    }
*/