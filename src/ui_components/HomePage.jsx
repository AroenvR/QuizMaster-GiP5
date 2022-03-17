import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { cookieChecker } from '../axios_services/UserService';

// The home page of our app. URL == "/"
const HomePage = () => {
    return (
        <div id="Home-Page-Div" alt="Div containing the buttons form and welcome message.">
            <div id="Home-Page-h-Div">
                <h3>Welcome to Quiz Masters!</h3>
                { 
                    cookieChecker() === false && (
                        <h5>Please <a href="/login">log in</a> to enjoy the features of our website.</h5>
                    )
                }
            </div>

            <Nav.Link className='link-btn join-quiz-link' href="/join">
                <Button variant="primary">
                    Join Quiz!
                </Button>
            </Nav.Link>

            <Nav.Link className='link-btn host-quiz-link' href="/host">
                <Button variant="primary">Host Quiz!</Button>
            </Nav.Link>

            <Nav.Link className='link-btn create-question-link' href="/create-question">
                <Button variant="primary">Create Custom Question!</Button>
            </Nav.Link>

            <Nav.Link className='link-btn create-question-link' href="/results">
                <Button variant="primary">Check your Results!</Button>
            </Nav.Link>
        </div>
    )
}

export default HomePage
