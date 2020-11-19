import React from "react";
import PlusButton from "./PlusButton";
import Post from "./Post";
import CardColumns from "react-bootstrap/CardColumns";

export default function ({ postData, onCreatePost }) {
  const posts = postData.map((post) => {
    return (
      <Post
        title={post.title}
        author={post.author}
        date={post.date}
        text={post.text}
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
