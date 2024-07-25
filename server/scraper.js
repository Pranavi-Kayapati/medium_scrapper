const puppeteer = require("puppeteer");
require("dotenv").config();
async function scrapeMedium(topic) {
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });
  try {
    const page = await browser.newPage();

    await page.goto(`https://medium.com/search?q=${topic}`);

    await page.waitForSelector("article");

    const articles = await page.evaluate(() => {
      const articleNodes = document.querySelectorAll(
        "div.ab.cn>div.co.bg.cp.cq.cr.cs > div.l"
      );
      console.log("articlesNodes: ", articleNodes);
      const results = [];
      let counter = 1;
      articleNodes.forEach((article) => {
        const titleNode = article.querySelector("h2");
        const contentNode = article.querySelector("h3");
        const authorNode = article.querySelector("p");
        const dateNode = article.querySelector("div.ab.q>span");
        const linkNode = article.querySelector('[role="link"][data-href]');

        if (titleNode && contentNode && authorNode && linkNode && dateNode) {
          results.push({
            id: counter,
            title: titleNode.innerText,
            content: contentNode.innerText,
            author: authorNode.innerText,
            url: linkNode.dataset.href,
            date: dateNode.innerText,
          });
          counter++;
        }
      });
      return results.slice(0, 5);
    });

    await browser.close();
    return articles;
  } catch (error) {
    console.error(`Error scraping Medium: ${error.message}`);
    console.error(error.stack);
    await browser.close();
    throw error;
  }
}

module.exports = { scrapeMedium };
