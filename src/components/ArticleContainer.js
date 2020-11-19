import React from "react";
import Article from "./Article";
import CardColumns from "react-bootstrap/CardColumns";

export default function ({ articleData }) {
  const articles = articleData.map((article) => {
    return (
      <Article
        title={article.title}
        author={article.author}
        date={article.date}
        text={article.text}
        img={article.imgUrl}
        key={article.id}
      >
        {" "}
      </Article>
    );
  });
  return (
    <div>
      <p>Article</p>
      <CardColumns>{articles}</CardColumns>
    </div>
  );
}
