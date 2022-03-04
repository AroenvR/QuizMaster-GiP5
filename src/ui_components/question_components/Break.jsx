import React from 'react';
import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

//Recreating the incoming DTO to have selectable variables in the 'question' hook.
let questionDTO = {
    question_id: null,
    answers: [],
    type: null,
    quiz_title: null,
    question_string: null,
    description: null,
    break: null,
    topic: null
}

function Break(props) {

    const sendToBackend = () => {
            console.log("Yolo! (WIP)")

            //TODO: Send to Axios, baby!
    }

    //HTML from here on out.
    //Basic Bootstrap was used for the radio buttons because the component based Bootstrap kept bugging out.
    return (
        <div id="Quiz-Break-Div" alt="Div containing the 'Break time!'.">
            <h2>Break time! Your timer has stopped until you request the next question!</h2>
            
            <Button className='next-question' id='Break-Btn' variant='success' onClick={sendToBackend}>Next Question!</Button>
        </div>
    )
}

export default Break

