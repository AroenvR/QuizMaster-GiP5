import React from 'react';
import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

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

