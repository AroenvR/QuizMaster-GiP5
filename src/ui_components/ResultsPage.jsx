import { useEffect, useState } from 'react';

import { getResult } from '../axios_services/ResultService';
import { getAllQuizzess } from '../axios_services/QuizService';
import { handleErrorCode } from '../util/CodeHandler';

let resultsInitializer = {
    answersCorrect: null, //int
    totalAnswers: null, //int
    minutesTaken: null, //int
    secondsTaken: null, //int
    place: null, //int
    topTen: [] //of strings, sorted
}

let quizzesInitializer = [ 
    { quizTitle: null, quizCode: null}, 
    { quizTitle: null, quizCode: null} 
]

// This page shows the results of all quizzes a player participated in.
const ResultsPage = () => {
    const [results, setResults] = useState(resultsInitializer);
    const [quizzes, setQuizzes] = useState(quizzesInitializer);

    useEffect(() => { fetchQuizzes() }, []);

    // Fetch all quizzes the currently logged in participant participated in.
    async function fetchQuizzes() {
        await getAllQuizzess().then((resp) => {
            console.log(resp); // TODO: Remove
            
            if(resp.status === 200) {
                setQuizzes(resp.data);
            }
        })
        .catch((ex) => {
            console.log(ex);
            console.log(ex.response)
            handleErrorCode(ex.response);
        })
    }

    // Fetch results for a selected quiz.
    async function fetchResults(quizCode) {

        await getResult(quizCode).then((resp) => {
            console.log(resp); // TODO: Remove

            if(resp.status === 200) {
                setResults(resp.data);
            }
        })
        .catch((ex) => {
            handleErrorCode(ex.response);
        })
    }

    // Render selectable quiz titles (selectability edited in the index.css file.)
    const renderQuizTitles = () => {
        return quizzes.map((q, index) => {
            return(
                <p 
                    key={index}
                    onClick={() => handleQuizSelection(q.quizCode)}
                >{q.quizTitle}</p>
            );
        })
    }

    console.log(results); //TODO: remove

    // Render results of a quiz after it has been selected.
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

    // Render the top 10 for a selected quiz.
    const renderTopTen = () => {
        if(results === undefined) return;

        return results.topTen.map((res, index) => {
            return(
                <p key={index}>{(index + 1) + ": " + res}</p>
            );
        })
    }

    // Handle selection of a quiz title.
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
                { renderQuizTitles() }
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

//TODO: remove
// let mockDTO = {
//     answersCorrect: 10, 
//     totalAnswers: 10, 
//     minutesTaken: 1, 
//     secondsTaken: 50, 
//     place: 5,
//     topTen: ["Uderax", "Woot", "Lekkerbek", "JetMan", "Koala", "MathisCement", "Boggert", "Pim Weeters", "Cheerleader", "LaHorcrux"]
// }

// let mockDTOTwo = {
//     answersCorrect: 8, 
//     totalAnswers: 10, 
//     minutesTaken: 5, 
//     secondsTaken: 50, 
//     place: 12,
//     topTen: ["JetMan", "Koala", "Boggert", "Pim Weeters", "Uderax", "Woot", "MathisCement",  "Lekkerbek", "LaHorcrux", "Cheerleader"]
// }

// let mockCodes = ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4", "Quiz 5", "Quiz 6", "Quiz 7", "Quiz 8", "Quiz 9", "Quiz 10"]