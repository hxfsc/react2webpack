const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/", express.static(path.resolve(__dirname, "./dist")));
app.listen("9000", () => {
  console.log("react ssr on port 9000");
});
