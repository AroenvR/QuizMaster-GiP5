import React from 'react';

// Break == Break between Questions during a Quiz. This is defined by dto.break === true.
const Break = () => {

    //HTML from here on out.
    return (
        <div id="Quiz-Break-Div" alt="Div containing the 'Break time!'.">
            <h2>Break time! Your timer has stopped until you request the next question!</h2>
        </div>
    )
}

export default Break

