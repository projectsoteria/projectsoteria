import React from "react";
import Card from "react-bootstrap/Card";

export default function ({ author, text, imageUrl, date, comments }) {
  return (
    ///style={{ background-color: 'pink' }}
    <Card bg="primary">
      <Card.Header>{date}</Card.Header>
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
