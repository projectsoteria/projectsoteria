import React, { useRef, useState } from "react";

import Button from "react-bootstrap/Button";

export default function ({ onCreateComment, onClick }) {
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
        onClick={()=>{
          handleShow()
          onClick()
        }}
      >
        <i className="fa fa-plus"></i>+
      </Button>
    </>
  );
}
