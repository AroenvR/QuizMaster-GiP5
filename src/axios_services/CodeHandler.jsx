
import Cookies from 'js-cookie';

export function handleErrorCode(response) {

    switch(response.status) {
        case 400: // bad request
            alert(response.data);
            return;
        
        case 401: // Unauthorized 
        case 403: // Forbidden
            alert(response.data);
            Cookies.set("loggedIn", "false")
            window.location.href = '/login';
            return;

        case 405: // Method Not Allowed
            alert(response.data.error);
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