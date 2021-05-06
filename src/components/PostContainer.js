import React, { useState } from "react";

import { API } from "aws-amplify";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import CardColumns from "react-bootstrap/CardColumns";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import PlusButton from "./PlusButton";
import Post from "./Post";

export default function ({onCreatePost}) {
  const [postData, setPosts] = useState([]);
  API.graphql( {
    query: `
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
  `, 
  variables:  {
      filter: {
        title: {
          contains: "test"
        }
      }
  } 
}).then((response) => {
    console.log(response);
    setPosts(response.data.listPosts.items);
  });
  const posts = postData.map((post) => {
    return (
      <Post
        id={post.id}
        title={post.title}
        author={"shreya"}
        date={post.createdAt}
        text={post.text}
        comments={post.comments}
        img={post.image}
        key={post.id}
      ></Post>
    );
  });
  return (
    <div>
      <DropdownButton
        as={ButtonGroup}
        key={"Filtering"}
        id={"dropdown-variants-Filtering"}
        variant={"filtering"}
        title={"Filtering"}
      >
        <Dropdown.Item eventKey="1">Author: </Dropdown.Item>
        <Dropdown.Item eventKey="2">Keyword: </Dropdown.Item>
        <Dropdown.Item eventKey="3">Past 3 Months </Dropdown.Item>
        <Dropdown.Item eventKey="4">Questions </Dropdown.Item>
        <Dropdown.Item eventKey="5">Tips </Dropdown.Item>

        <Dropdown.Divider />
        <Dropdown.Item eventKey="6">Your Posts</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        key={"Sorting"}
        id={"dropdown-variants-Sorting"}
        variant={"sorting"}
        title={"Sorting"}
      >
        <Dropdown.Item eventKey="1">Date, old to new: </Dropdown.Item>
        <Dropdown.Item eventKey="2">Date, new to old: </Dropdown.Item>
        <Dropdown.Item eventKey="3">Alphabetically A to Z: </Dropdown.Item>
        <Dropdown.Item eventKey="4">Alphabetically Z to A: </Dropdown.Item>
      </DropdownButton>
      <CardColumns>{posts}</CardColumns>
      <PlusButton onCreatePost={onCreatePost}></PlusButton>
    </div>
  );
}
