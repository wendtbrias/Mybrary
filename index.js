if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ debug: true });
}

const express = require("express");
const app = express();

app.get(`/`, (req, res) => res.send("<h1>Hello , world</h1>"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`hello port : ${port}`));
