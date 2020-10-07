import React,{useState} from "react";
import Article from "./Article";
import CardColumns from "react-bootstrap/CardColumns";

export default function ({articleData})
{
  const articles = articleData.map((article) => {
    return (
      <Article
      author={article.author}
      date={article.date}
      text={article.text}
      img={article.imgUrl}
      key={article.author + article.text}
      > </Article>
    )
  });
  return (
    <div>
      <p>Article</p>
      <CardColumns>{articles}</CardColumns>
    </div>
  );
}
