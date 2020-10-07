import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function () {
  return (
    <Jumbotron fluid bg="primary">
      <Container>
        <h1>Welcome to Project Soteria</h1>
        <p>
          {" "}
          Project Soteria is a website that gives people tips and knowledge on
          how to stay safe in the public and in the streets. It is community
          based, and also gives people the ability to share their own
          experiences.
        </p>
        <p>
          Project Soteria is compromized of two main sections: the articles and
          the community feed. When going onto the website, you are given the
          chance to read short articles that are provided by our team. These
          areticles are planned out, researched, and are guarunteed accuracy.
          These articles can also be commented on to have further insight. Their
          is also a community forum, in which users can post their personal
          experiences/tips that relate to public safety, and users can also
          comment on these posts as well. These comments are reviewed, and made
          sure to be appopriate.
        </p>
      </Container>
    </Jumbotron>
  );
}
