import React, { useRef, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function ({ postData, onCreatePost }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const titleRef = useRef();
  const postRef = useRef();
  const userRef = useRef();

  return (
    <>
      <Button
        variant="primary"
        className="rounded-circle"
        size="lg"
        onClick={handleShow}
      >
        <i className="fa fa-plus"></i>+
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter title"
                ref={titleRef}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Post</Form.Label>
              <Form.Control
                type="post"
                placeholder="Enter post"
                ref={postRef}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Display user" ref={userRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              onCreatePost({
                title: titleRef.current.value,
                text: postRef.current.value,
                likes: 0,
              }).then(handleClose);
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
