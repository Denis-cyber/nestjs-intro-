import { Injectable } from "@nestjs/common";
import { TaskDto } from "./task.dto";

@Injectable()
export class TaskService {
  private TASKS = [
    {
      id: 1,
      name: "Record video",
      isCompleted: false,
    },
  ];

  getAll() {
    return this.TASKS;
  }

  create(dto: TaskDto) {
    this.TASKS.push({
      id: this.TASKS.length + 1,
      name: dto.name,
      isCompleted: false,
    });

    return this.TASKS;
  }

  toggleCompleted(id: string) {
    const task = this.TASKS.find((task) => task.id === +id);
    task.isCompleted = !task.isCompleted;
    return task;
  }
}
