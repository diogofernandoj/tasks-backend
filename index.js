import "dotenv/config.js";
import express from "express";

import { CreateTaskController } from "./src/controllers/create-task.js";
import { GetTasksController } from "./src/controllers/get-tasks.js";

const app = express();

app.use(express.json());

app.get("/tasks", async (_request, response) => {
  const getTasksController = new GetTasksController();

  const { statusCode, body } = await getTasksController.execute();

  response.status(statusCode).send(JSON.stringify(body));
});

app.post("/tasks", async (request, response) => {
  const createTaskController = new CreateTaskController();

  const { statusCode, body } = await createTaskController.execute(request);

  response.status(statusCode).send(JSON.stringify(body));
});

app.listen(4000, () => console.log("Listening on port 4000"));
