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
        title={post.title}
        author={post.author}
        date={post.date}
        text={post.text}
        comments={post.comments}
        img={post.img}
        key={post.author + post.text}
      ></Post>
    );
  });
  return (
    <div>
      <p>Post</p>
      <CardColumns>{posts}</CardColumns>
      <PlusButton onCreatePost={onCreatePost}></PlusButton>
    </div>
  );
}
