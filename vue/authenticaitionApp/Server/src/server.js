const express = require("express");
const bodyParser = require("body-parser");
const setRoutes = require("./routes");
const mongo = require("./mongo");
require("dotenv").config();

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log("cors header added");
  next();
})
const port = process.env.SERVER_PORT || 8000;

setRoutes(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
  console.log(`⚡App is running on port ${port}⚡`);
});
