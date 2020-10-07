import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function () {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>About Project Soteria</h1>
        <p>
          Project Soteria is an easy to use website to give people knowledge on
          outside safety. It is compromised of a page for community outreach and
          another page for articles. The articles page is compromised of many
          articles made by us. Viewers can comment on these, and add their own
          insight, but if you would like to create your own stories and seperate
          insight, their is another page for the community, in which you can
          post tips, tricks, and personal experiences related to safety. These
          posts are heavily looked over, to make sure nothing innapropriate or
          irrelivant appears. Viewers may also flag the comments and posts, to
          ensure that nothing irrelevant appears.
        </p>
        <p>The name "Soteria" is based off of the greek goddess of safety.</p>
      </Container>
    </Jumbotron>
  );
}
