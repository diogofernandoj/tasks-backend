import { GetTasksRepository } from "../repositories/get-tasks.js";

export class GetTasksController {
  async execute() {
    try {
      const getTasksRepository = new GetTasksRepository();

      const tasks = await getTasksRepository.execute();

      return { statusCode: 200, body: tasks };
    } catch (error) {
      console.error(error);
      return { statusCode: 500, body: { message: "Internal server error" } };
    }
  }
}
