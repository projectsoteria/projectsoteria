import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
export default function ({ title, user, onSelect }) {
  let content = undefined;
  console.log(user);
  if (user === undefined) {
    ///content is button that says sign in
    content = (
      <Form inline>
        <Button variant="primary">Sign In</Button>
      </Form>
    );
  } else {
    ///text says signed in user is username
    content = (
      <Navbar.Text>
        Signed in as: <a href="#login">{user}</a>
      </Navbar.Text>
    );
  }
  return (
    <Navbar expand="lg" fixed="top" bg="info">
      <Navbar.Brand href="/home">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto"
          defaultActiveKey="/home"
          onSelect={(selectedKey) => onSelect(selectedKey)}
        >
          <Nav.Link eventKey="Home">Home</Nav.Link>
          <Nav.Link eventKey="Articles">Articles</Nav.Link>
          <Nav.Link eventKey="Posts">Posts</Nav.Link>
          <Nav.Link eventKey="About">About</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav.Link>{content}</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
