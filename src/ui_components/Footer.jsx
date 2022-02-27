//Starting Footer template from: https://stackoverflow.com/questions/40515142/how-to-make-a-sticky-footer-in-react

import Nav from 'react-bootstrap/Nav';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    padding: "5px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",

    display: "flex",
    justifyContent: "center"
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

/*
  Something with the Phantom Div goes freaky if I edit styling in the css file.
  Might look at this again later, but for now I'm styling it with JavaScript.
*/
const Footer = () => {
    return (
        <div id='Footer-Div' alt="The styling for the two child divs is in the Footer.jsx component.">
            <div style={phantom} />
            <div style={style}>
                <Nav.Link href="contact">Contact</Nav.Link>
                <Nav.Link href="discord">Discord</Nav.Link>
                <Nav.Link href="https://www.ucll.be/"><img src='~/src/img/UCLL_Logo.jpg' alt="UCLL Logo" /></Nav.Link>
            </div>
        </div>
    )
}

export default Footer
