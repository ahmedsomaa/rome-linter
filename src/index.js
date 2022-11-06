const express = require("express");

const port = 3000;
const app = express();

app.get("/", (_req, res) => {
  res.send("Rome tools is amazing");
});

app.listen(port, () => {
  console.log(`Rome app is running at http://localhost:${port}`);
});