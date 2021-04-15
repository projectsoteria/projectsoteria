import React, { useEffect } from "react";

import CardColumns from "react-bootstrap/CardColumns";
import PlusButton from "./PlusButton";
import Post from "./Post";

export default function ({ postData, onCreatePost }) {
  useEffect(() => {
    console.log(postData)
  }, [postData])
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
      <CardColumns>{posts}</CardColumns>
      <PlusButton onCreatePost={onCreatePost}></PlusButton>
    </div>
  );
}
