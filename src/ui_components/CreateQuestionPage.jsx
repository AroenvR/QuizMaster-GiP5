import { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import CreateMultipleChoice from './question_components/CreateMultipleChoice';
import CreateTrueOrFalse from './question_components/CreateTrueOrFalse';
import CreateFillInTheBlank from './question_components/CreateFillInTheBlank';


// User wants to create a custom Quiz Question.
// Sends a POST to create Question with a CreateQuestionDTO.
// Sending of this POST is handled by the HandleQuestionDTO component. 
const CreateQuestionPage = () => {
    const [dropdown, setDropdown] = useState("Multiple Choice");

    // The next few handlers are to set the dropdown button's text.
    const handleMultipleChoice = () => {
        setDropdown("Multiple Choice");
    }
    
    const handleTrueOrFalse = () => {
        setDropdown("True or False");
    }

    const handleFillInTheBlank = () => {
        setDropdown("Fill in the Blank");
    }

    const renderQuestionForm = () => { 
        switch(dropdown) {
            case "Multiple Choice":
                return (
                    <CreateMultipleChoice />
                );
            
            case "True or False":
                return (
                    <CreateTrueOrFalse />
                );

            case "Fill in the Blank":
                return (
                    <CreateFillInTheBlank />
                );
            
            default:
                return (
                    <CreateMultipleChoice />
                );
        }
    }

    // HTML from here on out.
    return (
        <div id="Create-Question-Page-Div" alt="Div containing the custom question forms, actual forms render 1 div lower.">
            <h2>Create custom question</h2>

            <Dropdown>

                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {dropdown}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                        {/* A function passed WITHOUT brackets is a REFERENCE to a function. WITH brackets it would trigger every time the Component is rendered! (Thnk of a handleClick) */}
                        {/* A method passed with brackets () is a direct call upon the function. */}
                        {/* That's why you need brackets for functions that generate HTML and no brackets for functions that should React to a trigger. Pun intended? */}
                        <Dropdown.Item onClick={handleMultipleChoice}>Multiple Choice</Dropdown.Item> 
                        <Dropdown.Item onClick={handleTrueOrFalse}>True or False</Dropdown.Item>
                        <Dropdown.Item onClick={handleFillInTheBlank}>Fill in the Blank</Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown>

            <div id="Create-Question-Form-Div" alt="Div containing the actual questions forms.">
                { renderQuestionForm() }
            </div>
        </div>
    )
}

export default CreateQuestionPage
