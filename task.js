export class Task {
  constructor(message) {
    this.msg = message;
  }

  run() {
    console.log(this.msg);
  }
}
