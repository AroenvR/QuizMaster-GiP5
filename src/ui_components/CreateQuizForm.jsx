import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/esm/Button';

import { getAll, getAllFakes, getByName } from '../axios_services/TopicService';
import { getAllFakeQuestionsForTopic } from "../axios_services/QuestionService";

const CreateQuizForm = () => {
    const [topics, setTopics] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [chosenQuestions, setChosenQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { handleGetTopics() }, [chosenQuestions]); // Empty array blocks the hook from executing again after initial render. // You can put in a useState's variable, so it executes every time that variable changes.

    async function handleGetTopics() {
        setLoading(true);
        console.log("Fetching data.")

        await getAllFakes().then((resp) => { //TODO: Change to getAll to get real data.
            console.log(resp); //TODO: For debugging purposes, do not forget to comment out for Production.

            setTopics(resp.data);

            setLoading(false);
        })
        .catch((ex) => {
            console.log("Exception occurred while getting all topics.");
            console.log(ex.response); //TODO: For debugging purposes, do not forget to comment out for Production.

            setLoading(false);
        })
    }    

    async function handleGetQuestions(topicName) {
        setLoading(true);

        console.log("Fetching data.")

        await getAllFakeQuestionsForTopic(topicName).then((resp) => { //TODO: Change to getAll to get real data.
            console.log(resp); //TODO: For debugging purposes, do not forget to comment out for Production.

            setQuestions(resp.data);
            setLoading(false);
        })
        .catch((ex) => {
            console.log("Exception occurred while getting all topics.");
            console.log(ex.response); //TODO: For debugging purposes, do not forget to comment out for Production.

            setLoading(false);
        })
    }

    console.log(topics)
    console.log("loading: " + loading);

    const handleAddQuestion = (q) => {
        setChosenQuestions(old => [
            ...old,
            q
        ]);
    }

    //HTML from here on out.
    if (!loading) {
        return (
            <div id="Create-Quiz-Form" alt="Div containing the Quiz creation form.">
    
                <div>
                    <h1>Your quiz:</h1>
                    {
                        chosenQuestions.map((q, index) => {
                            return (
                                <p className='current-question-p'
                                    key={index}
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
                                <p className='topic-p'
                                    key={index}
                                    onClick={() => handleGetQuestions(t.name)}
                                >
                                    {t.name}
                                </p>
                            )
                        })
                    }
                </div>
    
                <div>
                    <h4>Possible questions:</h4>
                    {
                        questions.map((q, index) => {
                            return (
                                <p className='possible-question-p' 
                                    key={index}
                                    onClick={() => handleAddQuestion(q)}
                                >
                                    {q.questionString}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    else {
        return (<div></div>);
    }
    
}

export default CreateQuizForm
