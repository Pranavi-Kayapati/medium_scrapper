const API_URL = "https://scraper-server-two.vercel.app";
export const scrapeArticles = async (topic) => {
  try {
    const response = await fetch(`${API_URL}/scrape`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic }),
    });

    if (!response.ok) {
      throw new Error("Failed to scrape articles");
    }
    const articlesResponse = await fetch(`${API_URL}/articles`);

    if (!articlesResponse.ok) {
      throw new Error("Failed to fetch articles");
    }

    return await articlesResponse.json();
  } catch (error) {
    console.error("Error scraping articles:", error);
    throw error;
  }
};

export const getArticles = async () => {
  try {
    const response = await fetch(`${API_URL}/articles`);

    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
