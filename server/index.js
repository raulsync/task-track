const express = require("express");

const app = express();

const port = 5000;

app.get("/hello", (req, res) => {
  res.status(200).json({ mssg: "Hello World" });
});

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
