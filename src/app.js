const express = require("express");

require("../src/db/connection");

const bodyParser = require("body-parser");

const MensRanking = require("../src/models/mens");

const router = require("../src/routers/men");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// to use json data in express and we are using postman to get that data
// we need to use(express.json())
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`connection is live at  ${port} `);
});
