import { postgresClient } from "../db/postgres/client.js";

export class GetTasksRepository {
  async execute() {
    const result = await postgresClient.query("SELECT * FROM tasks;");

    return result;
  }
}
