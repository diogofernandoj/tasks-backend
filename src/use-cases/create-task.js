import { v4 as uuidv4 } from "uuid";

import { CreateTaskRepository } from "../repositories/create-task.js";

export class CreateTaskUseCase {
  async execute(createTaskParams) {
    const taskId = uuidv4();

    const task = {
      id: taskId,
      title: createTaskParams.title,
    };

    const createTaskRepository = new CreateTaskRepository();

    return await createTaskRepository.execute(task);
  }
}
