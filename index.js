const PORT = 3000;

//initialize express, cheerio, axios
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

//calling and saving it as app
const app = express();

//get a message to show that everything is running on server
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
