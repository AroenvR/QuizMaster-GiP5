
// ex.response
export function handleErrorCode(response) {
    switch(response.status) {
        case 400: // bad request
            alert(response.data);
            return;

        case 401: // unauthenticated
            alert(response.data);
            window.location.href = '/login';
            return;

        case 404: // not found
            alert(response.data);
            return;

        case 500: // internal server error
            alert("Something went wrong with the server, please try again later.");
            return;
    }
}