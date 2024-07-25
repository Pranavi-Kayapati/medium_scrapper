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
