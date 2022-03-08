import { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import CreateMultipleChoice from './question_components/CreateMultipleChoice';
import CreateTrueOrFalse from './question_components/CreateTrueOrFalse';
import CreateFillInTheBlank from './question_components/CreateFillInTheBlank';

const CreateQuestionPage = () => {
    const [dropdown, setDropdown] = useState("Multiple Choice");

    const handleMultipleChoice = () => {
        setDropdown("Multiple Choice");
    }
    
    const handleTrueOrFalse = () => {
        setDropdown("True or False");
    }

    const handleFillInTheBlank = () => {
        setDropdown("Fill in the Blank");
    }

    // const renderDropdownItems = () => {    
    //     switch(dropdown) {

    //         case "Multiple Choice":
    //             return (
    //                 <Dropdown.Menu>
    //                     <Dropdown.Item onClick={handleTrueOrFalse}>True or False</Dropdown.Item>
    //                     <Dropdown.Item onClick={handleFillInTheBlank}>Fill in the Blank</Dropdown.Item>
    //                 </Dropdown.Menu>
    //             );
            
    //         case "True or False":
    //             return (
    //                 <Dropdown.Menu>
    //                     <Dropdown.Item onClick={handleMultipleChoice}>Multiple Choice</Dropdown.Item>
    //                     <Dropdown.Item onClick={handleFillInTheBlank}>Fill in the Blank</Dropdown.Item>
    //                 </Dropdown.Menu>
    //             );

    //         case "Fill in the Blank":
    //             return (
    //                 <Dropdown.Menu>
    //                     <Dropdown.Item onClick={handleMultipleChoice}>Multiple Choice</Dropdown.Item>
    //                     <Dropdown.Item onClick={handleTrueOrFalse}>True or False</Dropdown.Item>
    //                 </Dropdown.Menu>
    //             );
            
    //         default:
    //             return (
    //                 <Dropdown.Menu>
    //                     <Dropdown.Item onClick={handleMultipleChoice}>Multiple Choice</Dropdown.Item>
    //                     <Dropdown.Item onClick={handleTrueOrFalse}>True or False</Dropdown.Item>
    //                     <Dropdown.Item onClick={handleFillInTheBlank}>Fill in the Blank</Dropdown.Item>
    //                 </Dropdown.Menu>
    //             );
    //     }
    // }

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
                        <Dropdown.Item onClick={handleMultipleChoice}>Multiple Choice</Dropdown.Item>
                        <Dropdown.Item onClick={handleTrueOrFalse}>True or False</Dropdown.Item>
                        <Dropdown.Item onClick={handleFillInTheBlank}>Fill in the Blank</Dropdown.Item>
                </Dropdown.Menu>

                {/* { renderDropdownItems() } */}

            </Dropdown>

            <div id="Create-Question-Form-Div" alt="Div containing the actual questions forms.">
                { renderQuestionForm() }
            </div>
        </div>
    )
}

export default CreateQuestionPage
