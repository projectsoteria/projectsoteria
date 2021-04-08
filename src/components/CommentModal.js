import React, { useRef, useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function ({show, onExit, onSubmit}) {
  const [commentText, setCommentText] = useState("")
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
                value = {commentText}
                onChange = {(e) => setCommentText(e.target.value)}
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
            onClick= {() => onSubmit(commentText)}
          >
            Submit
          </Button> 
        </Modal.Footer>
      </Modal>
    )
}