import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const HomePage = () => {
    return (
        <div id="Home-Page-Div" alt="Div containing the three buttons form.">
            <Nav.Link className='link-btn join-quiz-link' href="/join">
                <Button variant="primary">
                    Join Quiz!
                </Button>
            </Nav.Link>

            <Nav.Link className='link-btn host-quiz-link' href="/host">
                <Button variant="primary">Host Quiz!</Button>
            </Nav.Link>

            <Nav.Link className='link-btn create-question-link' href="/create-question">
                <Button className="testbtn" variant="primary">Create Custom Question!</Button>
            </Nav.Link>
        </div>
    )
}

export default HomePage
