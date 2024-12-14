import "dotenv/config.js";
import express from "express";

import { CreateTaskController } from "./src/controllers/create-task.js";

const app = express();

app.use(express.json());

app.post("/tasks", async (request, response) => {
  const createTaskController = new CreateTaskController();

  const { statusCode, body } = await createTaskController.execute(request);

  response.status(statusCode).send(JSON.stringify(body));
});

app.listen(4000, () => console.log("Listening on port 4000"));
