import * as queries from "./graphql/queries";

import { API, graphqlOperation } from "aws-amplify";
import Amplify, { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {listArticles, listPosts} from "./graphql/queries";

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
import { withAuthenticator } from "@aws-amplify/ui-react";

// TODO finish this
function App() {
  useEffect(() => {
    API.graphql(
      graphqlOperation(listArticles)
    ).then((response) => {
      console.log(response);
      setArticles(response.data.listArticles.items);
    });
    API.graphql(
      graphqlOperation(`
      query ListPosts(
        $filter: ModelPostFilterInput
        $limit: Int
        $nextToken: String
      ) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          items {
            userID
            id
            title
            text
            image
            comments {
              nextToken
              items {
                id
                text
              }
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    `)
    ).then((response) => {
      console.log(response);
      setPosts(response.data.listPosts.items);
    });
  }, []);

  const [eventKey, setEventKey] = useState("Home");
  ///const allTodos = await API.graphql({ query: queries.listTodos });
  ///console.log(allTodos);
  const [articles, setArticles] = useState([]);
  const [posts, setPosts] = useState([]);
  let page = undefined;
  if (eventKey === "Home") {
    page = <Home></Home>;
  } else if (eventKey === "About") {
    page = <About></About>;
  } else if (eventKey === "Articles") {
    page = <ArticleContainer articleData={articles}></ArticleContainer>;
  } else if (eventKey === "User") {
    page = <UserPage></UserPage>;
  } else if (eventKey === "Posts") {
    page = (
      <PostContainer
        postData={posts}
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
        <Row>
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
