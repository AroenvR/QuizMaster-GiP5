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
    const [results, setResults] = useState();
    const [quizCodes, setQuizCodes] = useState(mockCodes);

    useEffect(() => { fetchQuizCodes() }, []);

    async function fetchQuizCodes() {
        // await getAllQuizCodes().then((resp) => {
        //     console.log(resp);
        //     //TODO setQuizCodes
        // })
        // .catch((ex) => {
        //     handleErrorCode(ex.response);
        //     console.log(ex.response)
        //     //TODO
        // })
    }

    async function fetchResults(quizCode) {

        if(quizCode === "Quiz 1") {
            setResults(mockDTO);
        }
        else {
            setResults(mockDTOTwo);
        }

        // await getResult(quizCode).then((resp) => {
        //     console.log(resp);
        //     //TODO setResults
        // })
        // .catch((ex) => {
        //     handleErrorCode(ex.response);
        // })
    }

    const renderQuizCodes = () => {
        return quizCodes.map((q, index) => {
            return(
                <p 
                    key={index}
                    onClick={() => handleQuizSelection(q)}
                >{q}</p>
            );
        })
    }

    console.log(results);

    const renderResults = () => {
        if(results === undefined) return;

        return (
            <>
                <h3>Your scores:</h3>
                <p>{'Answers correct: ' + results.answersCorrect}</p>
                <p>{'Total Answers: ' + results.totalAnswers}</p>
                <p>{'Minutes taken: ' + results.minutesTaken}</p>
                <p>{'Seconds taken: ' + results.secondsTaken}</p>
                <p>{'Your place: ' + results.place}</p>
            </>
        );
    }

    const renderTopTen = () => {
        if(results === undefined) return;

        return results.topTen.map((res, index) => {
            return(
                <p key={index}>{(index + 1) + ": " + res}</p>
            );
        })
    }

    const handleQuizSelection = (quizCode) => {
        fetchResults(quizCode);
        console.log("Quiz: " + quizCode + " was clicked.")
    }

    // HTML from here on out.
    return (
        <div id="Results-Page-Div" alt="Div containing the results at the end of a quiz.">
            <h1>Results:</h1>

            <div id='Quiz-Code-Buttons-Div' alt="Div containing the Quiz Code buttons.">
                <h1>Choose a quiz:</h1>
                { renderQuizCodes() }
            </div>

            <div id='Quiz-Personal-Results-Div'>
                { renderResults() }
            </div>

            <div id='Quiz-Top-Ten-Div'>
                <h4>Top ten:</h4>
                { renderTopTen() }
            </div>
        </div>
    );
}

export default ResultsPage;

let mockDTO = {
    answersCorrect: 10, 
    totalAnswers: 10, 
    minutesTaken: 1, 
    secondsTaken: 50, 
    place: 5,
    topTen: ["Uderax", "Woot", "Lekkerbek", "JetMan", "Koala", "MathisCement", "Boggert", "Pim Weeters", "Cheerleader", "LaHorcrux"]
}

let mockDTOTwo = {
    answersCorrect: 8, 
    totalAnswers: 10, 
    minutesTaken: 5, 
    secondsTaken: 50, 
    place: 12,
    topTen: ["JetMan", "Koala", "Boggert", "Pim Weeters", "Uderax", "Woot", "MathisCement",  "Lekkerbek", "LaHorcrux", "Cheerleader"]
}

let mockCodes = ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4", "Quiz 5", "Quiz 6", "Quiz 7", "Quiz 8", "Quiz 9", "Quiz 10"]