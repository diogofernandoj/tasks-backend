import { postgresClient } from "../db/postgres/client.js";

export class CreateTaskRepository {
  async execute(createTaskParams) {
    const results = await postgresClient.query(
      "INSERT INTO tasks (id, title) VALUES ($1, $2)",
      [createTaskParams.id, createTaskParams.title]
    );

    return results[0];
  }
}
