import { useRef, useState } from "react";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { getQuizByCode } from '../axios_services/QuizService';
import logo from '../img/Quiz-Masters-Logo.png';

const NavigationBar = () => {
    let searchRef = useRef(null);

    // Send the Code to the backend.
    async function fetchQuizByCode(quizCode) {

        await getQuizByCode(quizCode).then((resp) => {
            // Code has been sent to the backend, handle the returns here. HTTP codes and possible objects.

            console.log(resp); //TODO: For debugging purposes, do not forget to comment out for Production.

            // Check here if response.code 200 success, then redirect.
            window.location.href = '/quiz'; 
        })
        .catch((ex) => {
            console.log("Exception fetching quizByCode");

            console.log(ex); //TODO: For debugging purposes, do not forget to comment out for Production.

            // Check the HTTP code here, then handle if necessary.
            window.location.href = '/quiz'; //TODO: For presentation purposes, NO NOT forget to remove this.
        })
    }

    // Synchronous step inbetween to make sure the ref hook is fully loaded before sending to the backend.
    const handleJoin = () => {
        fetchQuizByCode(searchRef.current.value);
    }

    const renderLoginLogout = () => {
        
        if (true) { //TODO: Get this to check for cookie.
            return (
                <div id="Login-And-Sign-Up-Btns-Div" alt="Div containing the login and signup buttons.">
                    <Nav.Link href="login"><Button variant="outline-primary">Log in</Button></Nav.Link>
                    <Nav.Link href="sign-up"><Button variant="outline-primary">Sign Up</Button></Nav.Link>
                </div>
            );
        }
        else {
            return (
                <Nav.Link href="logout"><Button variant="outline-primary">Logout</Button></Nav.Link>
            );
        }
    }

    return (
        <div id="Navigation-Bar-Div">
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                    <img
                        id="Quiz-Masters-Logo"
                        src={logo}
                        alt='QuizMasters Logo'
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        
                        <Form className="d-flex mx-auto nav-join-quiz-form">
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
                            {/* <NavDropdown title="Personal" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="my-questions">My Questions</NavDropdown.Item>
                                <NavDropdown.Item href="my-quizzes">My Quizzes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="account">My Account</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>

                        { renderLoginLogout() }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;