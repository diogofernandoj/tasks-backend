import { CreateTaskUseCase } from "../use-cases/create-task.js";

export class CreateTaskController {
  async execute(httpRequest) {
    try {
      const { title } = httpRequest.body;

      if (!title || title.trim().length === 0) {
        return {
          statusCode: 400,
          body: {
            message: "Title param is missing",
          },
        };
      }

      const createTaskUseCase = new CreateTaskUseCase();

      const createdTask = await createTaskUseCase.execute({ title });

      return {
        statusCode: 201,
        body: createdTask,
      };
    } catch (error) {
      console.error(error);
      return { statusCode: 500, body: { message: "Internal server error" } };
    }
  }
}
