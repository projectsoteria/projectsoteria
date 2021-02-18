import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import  React from "react";

export default function ({CommentModal, show, onExit, onSubmit}) {
    return(
        <Modal
        backdrop="static"
        keyboard={false}
        show={show}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                type="post"
                placeholder="Enter comment"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Display user"  />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onExit}>
            Exit
          </Button>
          
          <Button
            variant="primary"
            type="submit"
            onClick={onSubmit}
          >
            Submit
          </Button> 
        </Modal.Footer>
      </Modal>
    )
}