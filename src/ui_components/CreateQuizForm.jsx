import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/esm/Button';

import { getAll, getAllFakes, getByName } from '../axios_services/TopicService';
import { getAllFakeQuestionsForTopic } from "../axios_services/QuestionService";

const CreateQuizForm = () => {
    useEffect(() => { handleGetTopics() }, []); // Empty array blocks the hook from executing again after initial render. // You can put in a useState's variable, so it executes every time that variable changes.
    
    const [topics, setTopics] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [chosenQuestions, setChosenQuestions] = useState([]);

    async function handleGetTopics() {
        console.log("Fetching data.")

        await getAllFakes().then((resp) => { //TODO: Change to getAll to get real data.
            console.log(resp); //TODO: For debugging purposes, do not forget to comment out for Production.

            setTopics(resp.data);
        })
        .catch((ex) => {
            console.log("Exception occurred while getting all topics.");
            console.log(ex.response); //TODO: For debugging purposes, do not forget to comment out for Production.
        })
    }    

    async function handleGetQuestions(topicName) {
        console.log("Fetching data.")

        await getAllFakeQuestionsForTopic(topicName).then((resp) => { //TODO: Change to getAll to get real data.
            console.log(resp); //TODO: For debugging purposes, do not forget to comment out for Production.

            setQuestions(resp.data);
        })
        .catch((ex) => {
            console.log("Exception occurred while getting all topics.");
            console.log(ex.response); //TODO: For debugging purposes, do not forget to comment out for Production.
        })
    }

    console.log(topics)

    //HTML from here on out.
    return (
        <div id="Create-Quiz-Form" alt="Div containing the Quiz creation form.">

            <div>
                <h1>Your quiz:</h1>
                {
                    chosenQuestions.map((q, index) => {
                        return (
                            <p 
                                key={index}
                                onClick={() => console.log(q.questionString)}
                            >
                                {q.questionString}
                            </p>
                        )
                    })
                }
            </div>

            <div id="Create-Quiz-Topics-Container">
                <h3>All topics:</h3>
                {
                    topics.map((t, index) => {
                        return (
                            <button 
                                key={index}
                                onClick={() => handleGetQuestions(t.name)}
                            >
                                {t.name}
                            </button>
                        )
                    })
                }
            </div>

            <div>
                <h4>Possible questions:</h4>
                {
                    questions.map((q, index) => {
                        return (
                            <button 
                                key={index}
                                onClick={() => chosenQuestions.push(q)}
                            >
                                {q.questionString}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CreateQuizForm
