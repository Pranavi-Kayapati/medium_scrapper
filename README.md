# Medium Article Scraper

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Introduction

This project scrapes Medium articles based on a search topic and displays them on a web interface. It includes both backend and frontend components, making it a full-stack application.

## Tech Stack Used

- **Backend:** Node.js, Express.js
- **Frontend:** React.js
- **Web Scraping:** Puppeteer
- **Deployment:** Render, Vercel

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


## Deployed Links

-**Frontend:** [https://your-frontend-deployment-url.vercel.app](https://medium-scraper-rho.vercel.app/)
-**Backend:** [https://your-backend-deployment-url.vercel.app](https://medium-scrapper-server.onrender.com)
