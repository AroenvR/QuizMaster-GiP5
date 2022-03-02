import http from "./Axios";

export function login(object) {
    return http.post("/login", object);
}

export function logout(object) {
    return http.post("/logout" + object)
}

export function signUp(object) {
    return http.post("/sign-up" + object)
}

//TODO: Make sure this is right.
/*  LoginDTO? UserDTO? Not sure.
    {
        email : "string",
        password : "string"
    }
*/