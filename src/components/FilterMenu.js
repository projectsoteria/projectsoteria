import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'

export default function({keyword, setKeyword, author, setAuthor, date, setDate, onSubmit}) {
    return (
            <Form>
  <Form.Group controlId="formBasicKeyWord">
    <Form.Label>Key Word</Form.Label>
    <Form.Control 
    value= {keyword} 
    placeholder="Enter key word" 
    onChange = {(e) => setKeyword(e.target.value)}
    />
    
  </Form.Group>
  <Form.Group controlId="formBasicAuthor">
    <Form.Label>Author</Form.Label>
    <Form.Control 
    value = {author}
    placeholder="Enter author" 
    onChange = {(e) => setAuthor(e.target.value)}
    />
  </Form.Group>
  <Form.Group type= "date" controlId="formBasicDate">
    <Form.Label>Date</Form.Label>
    <Form.Control
    value = {date}
    placeholder="Enter date" 
    onChange = {(e) => setDate(e.target.value)}
     />
  </Form.Group>

  <Button variant="primary" type="button" onClick={() => onSubmit()}>
    Submit
  </Button>
</Form>
)
}

