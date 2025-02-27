(function () {
  'use strict';

  class Task {
    constructor(message) {
      this.msg = message;
    }

    run() {
      console.log(this.msg);
    }
  }

  class User {
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

  const task = new Task("Hello world");

  const user = new User(task);

  user.do();

})();
//# sourceMappingURL=bundle.js.map
