import { Form, FormControl } from "react-bootstrap";
import React, { useContext } from "react";

import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SignOut from "./SignOut.js";
import ToggleButton from "./ToggleButton";
import UserContext from "./UserContext";

export default function ({ title, onSelect }) {
  const user = useContext(UserContext);
  const content = (
    <Button
      onClick={() => {
        onSelect("User");
      }}
    >
      Signed in as: {user.username}
    </Button>
  );

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
          <Nav.Item>
            <SignOut></SignOut>
          </Nav.Item>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
          <ToggleButton></ToggleButton>
        </Form>
        <Nav.Link>{content}</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
