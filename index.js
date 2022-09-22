const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const pretty = require("pretty");

const app = express();

const PORT = 5000;
const URL = "https://www.facebook.com/";

const fields = {
  username: "input#email",
  password: "input#pass",
};

axios(URL)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    const email = $("input#email");
    const password = $("input#pass");

    console.log(email.html(), password.html());
    // console.log($("body").html());
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
