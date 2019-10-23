const path = require("path");
const express = require("express");
const ReactSSR = require("react-dom/server");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const appSSR = require("./dist/index-ssr");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use("*", (req, res) => {
  let appString = ReactSSR.renderToString(appSSR.default);
  res.send(appString);
});
app.listen("9000", () => {
  console.log("react ssr on port 9000");
});
