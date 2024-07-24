import React from "react";
import Article from "./Article";
import "../CSS/ArticleList.css";
const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div key={article.id} className="article">
          <Article article={article} />{" "}
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
