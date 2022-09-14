const PORT = 5000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const URL = "https://theguardian.com/us";

axios(URL)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    const articles = [];

    $(".fc-item__title", html).each(function () {
      const title = $(this).text().trim();
      const aTag = $(this).find("a").attr("href");
      // console.log(`title = ${title} and href = ${aTag}`);
      articles.push({
        title,
        aTag,
      });
    });
    console.log(articles);
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
