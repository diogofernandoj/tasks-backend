const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (request, response) => {
  return response.status(200).send("Hello world!");
});

app.listen(4000, () => console.log("Listening on port 4000"));
