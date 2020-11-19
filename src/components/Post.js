import React from "react";
import Card from "react-bootstrap/Card";

export default function ({ author, text, title, imageUrl, date, comments }) {
  return (
    ///style={{ background-color: 'pink' }}
    <Card bg="danger">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{author}</Card.Text>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
