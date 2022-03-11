import React from 'react';

import Modal from 'react-bootstrap/Modal';

const QuestionModal = (props) => {

  // Change question's "type" int to a string.
  const typeToString = (type) => {
      switch(type) {

          case 1:
              return "Multiple Choice";

          case 2:
              return "True or False";

          case 3:
              return "Fill in the Blank";

          default:
              return "Something went wrong with the question type.";
      }
  }

  //HTML from here on out.
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { props.question.questionString }
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <p>
          <strong>Type:</strong> { typeToString(props.question.type) }
        </p>
        <p>
          <strong>Description:</strong> { props.question.description }
        </p>
        <hr />
        <h5>Possible answers:</h5>
        {
            props.question.answers.map((a, index) => {
                return (
                  <p key={index}>
                    { a }
                  </p>
                  );
            })
        }
      </Modal.Body>

      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default QuestionModal;