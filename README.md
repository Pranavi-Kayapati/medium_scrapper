# Medium Article Scraper

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Introduction

This project scrapes Medium articles based on a search topic and displays them on a web interface. It includes both backend and frontend components, making it a full-stack application.


## Project Type
 Fullstack

## Tech Stack Used

- **Backend:** Node.js, Express.js
- **Frontend:** React.js
- **Web Scraping:** Puppeteer
- **Deployment:** Render, Vercel

## Deployed Links

- **Frontend:** https://medium-scraper-rho.vercel.app/
- **Backend:** https://medium-scrapper-server.onrender.com


## Directory Structure
medium-article-scrapper/
├── server/
│   ├── db.js
|   ├── db.json
|   ├── router.js
│   ├── scraper.js
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   ├── ArticleList.js
│   │   │   ├── ArticleScraper.js
│   │   │   └── ...
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   │   └── ...
│   ├── package.json
│   ├── vercel.json
│   └── ...
├── .env
├── package.json
└── README.md

## Features

- **Search Medium Articles:** Users can input a topic and scrape the latest Medium articles related to that topic.
- **Display Articles:** The scraped articles are displayed in a user-friendly format with titles, content previews, author names, and publication dates.
- **View Full Articles:** Each article has a link to the full content on Medium.
- **Persisted Data:** Scraped articles are stored in a JSON file, allowing users to access previously scraped articles.
- **Responsive Design:** The frontend is designed to be responsive and works well on both desktop and mobile devices.

## API

### Scrape Articles
- **Endpoint:** `/scrape`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "topic": "your search topic"
  }

### Get Articles
- **Endpoint:** `/articles`
- **Method:** `GET`
- **Request Body:**
  ```json
  [
  {
    "id": 1,
    "title": "Article Title",
    "content": "Article content...",
    "author": "Author Name",
    "url": "https://medium.com/...",
    "date": "Publication Date"
  },
  ...
]

## Frontend

The frontend is built with React. It fetches the scraped articles from the backend and displays them.

### Key Components

- **App.js:** Main component that renders the search interface and article list.
- **ArticleScraper.jsx:** Component to scrape and display articles based on user input.
- **ArticleList.jsx:** Component that displays the list of articles.



