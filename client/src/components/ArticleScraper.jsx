import React, { useState } from "react";
import { scrapeArticles, getArticles } from "../api";
import ArticleList from "./ArticleList";
import "../CSS/ArticleScraper.css";
import search from "../images/search2.jpg";
import loder from "../images/Loading.gif";
const ArticleScraper = () => {
  const [topic, setTopic] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoadig, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleScrape = async () => {
    setIsLoading(true);
    setArticles([]);
    try {
      const scrapedArticles = await scrapeArticles(topic);
      console.log("scrapeArticles", scrapeArticles);
      setArticles(scrapedArticles);
      setIsLoading(false);
      localStorage.setItem("topic", topic);
      setTopic("");
    } catch (err) {
      setIsError(true);
      setErrorMessage(err.error);
    }
  };

  return (
    <div className="scraperContainer">
      <div className="scraperHeader">
        <h1>Medium Article Scraper</h1>
        <div>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Search For Articles..."
          />
          <button onClick={handleScrape}>Search</button>
        </div>
      </div>

      {isLoadig && !isError && (
        <div className="loading-indicator">
          <img src={loder} alt="Loading" />
          <h3>Its taking a while, please wait...</h3>
        </div>
      )}

      {!isLoadig && articles?.length > 0 && (
        <>
          <h2 className="result">
            Top 5 Results for {localStorage.getItem("topic")}
          </h2>
          <div>
            <ArticleList articles={articles} />
          </div>
        </>
      )}

      {!isLoadig && !articles?.length && (
        <div className="no-articles">
          <img src={search} alt="" />
          <h1>Search for Articles</h1>
        </div>
      )}

      {!isError && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default ArticleScraper;
