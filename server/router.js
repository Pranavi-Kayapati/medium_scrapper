const express = require("express");
const scraperRouter = express.Router();
const { scrapeMedium } = require("./scraper");
const { writeDB, readDB } = require("./db");

scraperRouter.get("/", (req, res) => {
  res.send("server is running");
});

scraperRouter.post("/scrape", async (req, res) => {
  const { topic } = req.body;
  try {
    let articles = await scrapeMedium(topic);
    console.log("articles", articles);
    await writeDB(articles);
    res.status(200).send(articles);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: `Failed to scrape Medium: ${error.message}` });
  }
});

scraperRouter.get("/articles", async (req, res) => {
  try {
    const articles = await readDB();
    res.json(articles);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Failed to read articles: ${error.message}` });
  }
});

module.exports = { scraperRouter };
