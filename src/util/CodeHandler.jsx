
import Cookies from 'js-cookie';
import swal from 'sweetalert';

export function handleErrorCode(response) {

    switch(response.status) {
        case 400: // Bad request
            swal({
                title: "Bad Request",
                text: response.data,
                icon: "error"
            }) 
            return;
        
        case 401: // Unauthorized 
        case 403: // Forbidden
            swal({ 
                title: "Unauthorized / Forbidden",
                text: response.data,
                icon: "warning"
            }).then(() => {
                Cookies.remove("JSESSIONID");
                window.location.href = '/login';
            });
            return;

        case 405: // Method Not Allowed
            swal({
                title: "Method Not Allowed",
                text: response.data.error,
                icon: "warning"
            }).then(() => {
                Cookies.remove("JSESSIONID");
                window.location.href = '/login';
            });
            return;

        case 404: // Not found
            swal({
                title: "Not found",
                text: "" + response.data.error,
                icon: "warning"
            })
            return;

        case 500: // Internal server error
            swal({ 
                title: "Apologies",
                text: "Something went wrong with the server, please try again later.",
                icon: "error",
                dangerMode: true
            });
            return;
    }
}