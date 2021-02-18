import React, {useEffect, useState} from "react";

import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import CommentModal from "./CommentModal.js";
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PlusButtonComment from "./PlusButtonComment";
import Popover from 'react-bootstrap/Popover'
import {createComment} from "./graphql/mutations.js";

export default function ({ author, text, title, comments }) {
  const [visible, setVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setVisible(true)
    setShowModal(true) 
  }

  useEffect(() => {
    console.log(comments)
  }, [comments])
  const popover = (
    <Popover id="popover-basic" show={visible}>
      <Popover.Title as="h3" className = "float-right">
        <PlusButtonComment onClick={openModal}></PlusButtonComment>
      </Popover.Title>
      {comments.items.map((comment) => {
        return (
          <Popover.Content>
          {comment.text}
          </Popover.Content>
        )
      })}
      
    </Popover>
  );

  return (
    <div>
    <Card bg="danger">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{author}</Card.Text>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer><OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Comments</Button>
    </OverlayTrigger></Card.Footer>

    </Card>

    <CommentModal show={showModal} onExit={() => setShowModal(false)} onSubmit={() => {
      API.graphql(
        graphqlOperation(
           createComment,
          { input: newPost }
        )
      ).then((response) => {
        console.log(response);
      })
              onCreateComment({
                title: titleRef.current.value,
                text: postRef.current.value,
                likes: 0,
              }).then(handleClose);
            }}></CommentModal>
    </div>
  );
}
