import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PostContainer from "./components/PostContainer";
import ArticleContainer from "./components/ArticleContainer";
import Navbar from "./components/Navbar";
import Amplify, { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "./graphql/queries";
import UserContextProvider from "./components/UserContextProvider";

function App() {
  useEffect(() => {
    API.graphql(
      graphqlOperation(/* GraphQL */ `
        query ListArticles(
          $filter: ModelArticleFilterInput
          $limit: Int
          $nextToken: String
        ) {
          listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
              id
              title
              text
              author
              likes
              comments {
                nextToken
              }
              createdAt
            }
            nextToken
          }
        }
      `)
    ).then((response) => {
      console.log(response);
      setArticles(response.data.listArticles.items);
    });
    API.graphql(
      graphqlOperation(/* GraphQL */ `
        query ListPosts(
          $filter: ModelPostFilterInput
          $limit: Int
          $nextToken: String
        ) {
          listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
              id
              title
              text
              image
              likes
              comments {
                nextToken
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
