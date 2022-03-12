import React from 'react';

import Button from 'react-bootstrap/Button';

// Break == Break between Questions during a Quiz. This is defined by dto.break === true.
// A button needs to be present to send a request for the next question.
const Break = () => {

    const sendToBackend = () => {
            console.log("Yolo! (WIP)")

            //TODO: Send to Axios, baby!
    }

    //HTML from here on out.
    return (
        <div id="Quiz-Break-Div" alt="Div containing the 'Break time!'.">
            <h2>Break time! Your timer has stopped until you request the next question!</h2>
            
            <Button className='next-question' id='Break-Btn' variant='success' onClick={sendToBackend}>Next Question!</Button>
        </div>
    )
}

export default Break

