import { useEffect, useState } from 'react';

import { getResult } from '../axios_services/ResultService';
import { handleErrorCode } from '../util/CodeHandler';

let resultsInitializer = {
    answersCorrect: null, //int
    totalAnswers: null, //int
    minutesTaken: null, //int
    secondsTaken: null, //int
    place: null, //int
    topTen: [] //of strings, sorted
}

const ResultsPage = () => {
    const [results, setResults] = useState(MockDTO);

    useEffect(() => { fetchResults() }, []);

    async function fetchResults() {

        // await getResult().then((resp) => {
        //     console.log(resp);
        // })
        // .catch((ex) => {
        //     handleErrorCode(ex.response);
        // })
        // console.log("Fetch was called.")
    }

    const renderTopTen = () => {
        return results.topTen.map((res, index) => {
            return(
                <p key={index}>{(index + 1) + ": " + res}</p>
            );
        })
    }

    return (
        <div id="Results-Page-Div" alt="Div containing the results at the end of a quiz.">
            <h1>Results:</h1>

            <div>
                <p>{'Answers correct: ' + results.answersCorrect}</p>
                <p>{'Total Answers: ' + results.totalAnswers}</p>
                <p>{'Minutes taken: ' + results.minutesTaken}</p>
                <p>{'Seconds taken: ' + results.secondsTaken}</p>
                <p>{'Your place: ' + results.place}</p>
                <h4>Top ten:</h4>
                { 
                    renderTopTen()
                }
            </div>
        </div>
    );
}

export default ResultsPage;

let MockDTO = {
    answersCorrect: 10, 
    totalAnswers: 10, 
    minutesTaken: 1, 
    secondsTaken: 50, 
    place: 5,
    topTen: ["Uderax", "Woot", "Lekkerbek", "JetMan", "Koala", "MathisCement", "Boggert", "Pim Weeters", "Cheerleader", "LaHorcrux"]
}