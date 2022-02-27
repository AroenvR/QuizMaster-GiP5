import { useRef } from "react";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { getQuizByCode } from '../axios_services/QuizService';

const NavigationBar = () => {
    let searchRef = useRef(null);

    async function fetchQuizByCode(quizCode) {
        console.log(quizCode)

        await getQuizByCode(quizCode).then((resp) => {
            console.log(resp);
        })
        .catch((ex) => {
            console.log("Exception fetching quizByCode");
            console.log(ex);
        })
    }

    const handleJoin = () => {

        fetchQuizByCode(searchRef.current.value);

        //TODO: Route to either the joined Quiz or a 403 Forbidden
    }

    return (
        <div id="Navigation-Bar-Div">
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="home">
                    <img
                        src='~/src/img/Quiz_Masters_UCLL_LOGO.jpg'
                        alt='QuizMasters Logo'
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        
                        <Form className="d-flex mx-auto">
                            <FormControl
                                ref={searchRef}
                                type="search"
                                placeholder="Enter Code"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" onClick={handleJoin}>Join</Button>
                        </Form>

                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Personal" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="my-questions">My Questions</NavDropdown.Item>
                                <NavDropdown.Item href="my-quizzes">My Quizzes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="account">My Account</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav.Link href="login"><Button variant="outline-primary">Log in</Button></Nav.Link>
                        <Nav.Link href="sign-up"><Button variant="outline-primary">Sign Up</Button></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;