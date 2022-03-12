import http from "./Axios";

import Cookies from 'js-cookie';

let jCookieName = "JSESSIONID";

export function login(email, password) {
    return http.get("/login", {
        headers: {
            "Authorization": "Basic " + btoa(email + ":" + password),
        }
    });
}

export function logout() {
    if(cookieChecker) {
        Cookies.remove(jCookieName);
    }

    return http.get("/logout");
}

export function signUp(email, username, password) {
    return http.post("/members", {
        email: email,
        username: username,
        password: password,
    });
}

export function cookieChecker() {
    let jCookie = Cookies.get(jCookieName);
    let cookieCheck = false;

    if (typeof jCookie !== "undefined") {
      cookieCheck = true;
      return cookieCheck;
    }
    return cookieCheck;
  }

/*  SignupDTO
    {
        email : "string",
        username : "string",
        password : "string",
    }
*/