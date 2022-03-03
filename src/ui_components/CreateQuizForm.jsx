import { useState } from 'react';

import Button from 'react-bootstrap/esm/Button';

import { getAll, getByName } from '../axios_services/TopicService';

const CreateQuizForm = () => {

    async function handleGetTopics() {

        await getAll().then((resp) => {
            console.log(resp);
        })
        .catch((ex) => {
            console.log("Exception occurred while getting all topics.");
            console.log(ex); //TODO: For debugging purposes, do not forget to comment out for Production.
        })
    }

    return (
        <div id="Create-Quiz-Form" alt="Div containing the Quiz creation form.">
            <Button onClick={handleGetTopics}>Get all Topics</Button>
        </div>
    )
}

export default CreateQuizForm
