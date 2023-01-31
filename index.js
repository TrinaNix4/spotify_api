const PORT = 8000;

//initialize express, cheerio, axios
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

//calling and saving it as app
const app = express();

app.get("/", (req, res) => {
  res.json("Wrselcome to my climate change news API");
});

app.get("/news", (req, res) => {
  axios
    .get("https://www.theguardian.com/environment/climate-crisis")
    .then((response) => {
      const html = response.data;
      console.log(html);
    });
});
//get a message to show that everything is running on server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
