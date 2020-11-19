import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
          articles are planned out, researched, and are guarunteed accuracy.
          These articles can also be commented on to have further insight. Their
          is also a community forum, in which users can post their personal
          experiences/tips that relate to public safety, and users can also
          comment on these posts as well. These comments are reviewed, and made
          sure to be appopriate.
        </p>
      </Container>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image
              src="https://bloximages.newyork1.vip.townnews.com/thepress.net/content/tncms/assets/v3/editorial/1/1c/11cfd9dc-4179-5f72-bbb1-b5d5596c2cae/5296073329605.image.jpg"
              rounded
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
