import React from "react";
import "../CSS/ArticleList.css";
const Article = ({ article }) => {
  return (
    <>
      <h2 className="article-title">{article.title}</h2>
      <div className="author">
        <h3>Author:</h3>
        <p className="article-author">{article.author}</p>
      </div>
      <p className="article-content">{article.content}</p>

      <div className="date-readmore">
        <div className="article-date">
          <h3>Date:</h3>
          <p className="post-date">{article.date}</p>
        </div>
        <div className="read-more">
          <a href={article.url} target="_blank">
            <button>Read more</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Article;
