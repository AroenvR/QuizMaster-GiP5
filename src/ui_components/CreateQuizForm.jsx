import { useState, useEffect } from 'react';

import { getAll } from '../axios_services/TopicService';
import { getAllQuestionsForTopic } from "../axios_services/QuestionService";
import { createQuiz } from '../axios_services/QuizService';

import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import QuestionModal from './question_components/QuestionModal';
import { handleErrorCode } from '../axios_services/CodeHandler';


let modalInitializer = {
    answers: [],
    type : null,
    questionString : null,
    description : null,
}

const CreateQuizForm = () => {
    // Hooks!
    const [topics, setTopics] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [chosenQuestions, setChosenQuestions] = useState([]);
    const [validated, setValidated] = useState(false);
    const [quizTitle, setQuizTitle] = useState("");

    // Hooks for the QuestionModal
    const [modalShow, setModalShow] = useState(false);
    const [modalQuestion, setModalQuestion] = useState(modalInitializer);


    // functions for DateTimePicker & hook initializer for start time
    // maxDate == date + 1 year
    const maxDate = (date) => {
        const newDate = new Date(date);

        newDate.setFullYear(newDate.getFullYear() + 1);
        return newDate;
    }

    // addOneHour == date + 1 hour
    const addOneHour = (date) => {
        const newDate = new Date(date);

        newDate.setHours(newDate.getHours() + 1);
        return newDate;
    }
    // Hooks!
    const [startTime, setStartTime] = useState(addOneHour(new Date));
    const [endTime, setEndTime] = useState();

    // Rerender component every time chosenQuestions gets updated
    useEffect(() => { handleGetTopics() }, [chosenQuestions]); // Empty array blocks the hook from executing again after initial render. You can put in a useState's variable, so it executes every time that variable changes

    // GET all topics
    async function handleGetTopics() {

        await getAll().then((resp) => { 

            if (resp.status === 200) {
                setTopics(resp.data);
            }
        })
        .catch((ex) => {
            handleErrorCode(ex.response);
        })
    }    

    // GET questions by topic
    async function handleGetQuestions(topicName) {

        await getAllQuestionsForTopic(topicName).then((resp) => { 

            if(resp.status === 200) {
                setQuestions(resp.data);
            }
        })
        .catch((ex) => {            
            handleErrorCode(ex.response);
        })
    }

    // POST quiz
    async function handleCreateQuiz() {
        const questionIds = [];

        // Creating array of questionId's from chosenQuestions array
        chosenQuestions.forEach(q => {
            questionIds.push(q.questionId);
        });

        // Checking for duplicate questions
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
        if (findDuplicates(questionIds).length !== 0) {
            alert("Please remove duplicate questions.");
            return;
        }

        // Constructing DTO
        const quizDTO = {
            quizTitle: quizTitle,
            questionIds: questionIds,
            startTime: startTime,
            endTime: endTime            
        }

        // Checking for false values
        if (quizDTO.quizTitle === "") {
            return;
        }
        if (quizDTO.questionIds.length === 0) {
            alert("Please add some questions to your quiz.");
            return;
        }
        if (typeof quizDTO.endTime === 'undefined') {
            alert("Please set an end time for your quiz.");
            return;
        }
        
        // Sending DTO to the backend.
        await createQuiz(quizDTO).then((resp) => {
            if(resp.status === 201) {
                alert("Quiz '" + quizDTO.quizTitle + "' has been created!"); 
                // TODO: If you ever come back around to this, change quizTitle to backend's title and not the frontend one. Minor difference, but it's a difference.
                // What? I make notes to myself referring to myself as you. Don't judge me!
                // Also, for MVP an alert is fine but if YOU got time, then change this to a modal.
            }
        })
        .catch((ex) => {
            handleErrorCode(ex.response);
        })
    }

    // Add a question to the chosenQuestions hook array
    const handleAddQuestion = (q) => {
        setChosenQuestions(old => [
            ...old,
            q
        ]);
    }

    // Create Quiz! btn has been clicked.
    async function handleSubmit(event) {
        const form = event.currentTarget;

        event.preventDefault();

        // Block if form's Validity is false.
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);

        // Calling function to POST quiz
        handleCreateQuiz();
    }

    // Render the QuestionModal, passing question from chosenQuestions.map (in the HTML)
    const renderModal = (question) => {
        setModalShow(true)

        setModalQuestion(question);
    }

    // Remove a question from the chosenQuestions array.
    const handleRemoveQuestion = (index) => {
        setChosenQuestions([
            ...chosenQuestions.slice(0, index),
            ...chosenQuestions.slice(index + 1, chosenQuestions.length)
        ])
    }

    // Set quizTitle
    const handleChangeTitle = (event) => {
        const { name, value } = event.currentTarget

        setQuizTitle(value);
    }

    //HTML from here on out.
    return (

        <div id="Create-Quiz-Page" alt="Div containing the Create Quiz grid and form.">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='mt-3'>

                <Form.Group className="mb-3" controlId="validationForTitle">
                    <Form.Label id='Quiz-Title-Label'>Quiz Title</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter the title for your quiz."
                        className="text-center"
                        onChange={handleChangeTitle}
                    />
                    <Form.Control.Feedback type="invalid">Please fill in a title.</Form.Control.Feedback>
                </Form.Group>

                <div id="Create-Quiz-Form" alt="Div containing the Quiz creation form.">
                    <h1>Your quiz:</h1>
                    
                    <div id="Create-Quiz-Current-Questions">
                        {
                            chosenQuestions.map((q, index) => {
                                return (
                                    <div className='chosen-question-div' key={index}>
                                        <p className='current-question-p'
                                            onClick={() => renderModal(q)}
                                        >
                                            { q.questionString }
                                        </p>
                                        <i className="fa fa-lg fa-trash delete-question-icon" onClick={() => handleRemoveQuestion(index)}></i>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <QuestionModal
                        question={modalQuestion}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />

                    <h3>All topics:</h3>
                    <div id="Create-Quiz-Topics-Container">
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

                    <h4>Possible questions:</h4>
                    <div id="Create-Quiz-Questions-By-Topic">
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

                <hr id='Quiz-Creation-Form-Hr' />

                <div id='Quiz-Start-End-Time-Div'>
                    <Form.Group>
                        <Form.Label>Quiz start time</Form.Label>
                        <DateTimePickerComponent
                            value={startTime}
                            min={startTime}
                            max={maxDate(startTime)}
                            format="dd / MMM / yy - HH:mm"
                            onChange={(event) => setStartTime(event.value)}
                            required={true}
                        >
                        </DateTimePickerComponent>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Quiz end time</Form.Label>
                        <DateTimePickerComponent
                            placeholder="Select the quiz's end time"
                            min={addOneHour(startTime)}
                            max={maxDate(startTime)}
                            format="dd / MMM / yy - HH:mm"
                            onChange={(event) => setEndTime(event.value)}
                            required={true}
                        >
                        </DateTimePickerComponent>
                    </Form.Group>
                </div>

                <Button variant="primary" type="submit">
                    Create quiz!
                </Button>
            </Form>
        </div>
    )
}

export default CreateQuizForm;
