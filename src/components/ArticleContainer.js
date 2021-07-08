import React, {useState} from "react";

import { API } from "aws-amplify";
import Article from "./Article";
import CardColumns from "react-bootstrap/CardColumns";
import {listArticles} from "../graphql/queries";

export default function ({}) {
  const [articleData, setArticles] = useState([]);
    API.graphql( {
      query: listArticles
    }).then((response) => {
      setArticles(response.data.listArticles.items);
    });
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
      {/* <p>Article</p> */}
      <CardColumns>{articles}</CardColumns>
    </div>
  );
}
