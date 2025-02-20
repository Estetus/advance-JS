import { Task } from "./task.js";

export class User {
  constructor(task) {
    if (task instanceof Task) {
      this.task = task;
    } else {
      throw new Error("Ошибка класса: task должен быть экземпляром Task");
    }
  }

  do() {
    this.task.run();
  }
}
