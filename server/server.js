//server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const { scraperRouter } = require("./router");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/", scraperRouter);

const PORT = 8001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// module.exports = app;
