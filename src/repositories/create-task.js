import { postgresClient } from "../db/postgres/client.js";

export class CreateTaskRepository {
  async execute(createTaskParams) {
    await postgresClient.query(
      "INSERT INTO tasks (id, title) VALUES ($1, $2)",
      [createTaskParams.id, createTaskParams.title]
    );

    const createdTask = await postgresClient.query(
      "SELECT * FROM tasks WHERE id = $1",
      [createTaskParams.id]
    );

    return createdTask[0];
  }
}
