import React from "react";
import Card from "react-bootstrap/Card";

export default function ({ author, text, title, imageUrl, date, comments }) {
  return (
    <Card bg="primary">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{author}</Card.Text>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
