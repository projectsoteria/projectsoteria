import { API, graphqlOperation } from "aws-amplify";
import React, {useState} from "react";

import About from "./components/About";
import ArticleContainer from "./components/ArticleContainer";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PostContainer from "./components/PostContainer";
import Row from "react-bootstrap/Row";
import UserContextProvider from "./components/UserContextProvider";
import UserPage from "./components/UserPage.js";

// TODO finish this
function App() {
  const [eventKey, setEventKey] = useState("Home");
  let page = undefined;
  if (eventKey === "Home") {
    page = <Home></Home>;
  } else if (eventKey === "About") {
    page = <About></About>;
  } else if (eventKey === "Articles") {
    page = <ArticleContainer></ArticleContainer>;
  } else if (eventKey === "User") {
    page = <UserPage></UserPage>;
  } else if (eventKey === "Posts") {
    page = (
      <PostContainer
        onCreatePost={(newPost) =>
          API.graphql(
            graphqlOperation(
              /* GraphQL */ `
                mutation CreatePost(
                  $input: CreatePostInput!
                  $condition: ModelPostConditionInput
                ) {
                  createPost(input: $input, condition: $condition) {
                    id
                  }
                }
              `,
              { input: newPost }
            )
          ).then((response) => {
            console.log(response);
          })
        }
      ></PostContainer>
    );
  }
  return (
    <UserContextProvider>
      <Container>
        <Row className="navBar">
          <Col>
            <Navbar
              title="Project Soteria"
              onSelect={(eventKey) => setEventKey(eventKey)}
            ></Navbar>
          </Col>
        </Row>
        <Row>
          <Col>{page}</Col>
        </Row>
        <Row>
          <Col>
            <Footer title="Project Soteria"></Footer>
          </Col>
        </Row>
      </Container>
    </UserContextProvider>
  );
}

export default App;
