"use strict";

class Car {
  #make;
  #model;
  #run;

  constructor(make, model, run) {
    this.#make = make;
    this.#model = model;
    this.mileage = run;
  }

  set mileage(newMileage) {
    if (newMileage >= 0) {
      this.#run = newMileage;
    } else {
      console.error("Неправильный пробег");
    }
  }

  get mileage() {
    return this.#run;
  }

  info() {
    console.log(
      `Марка: ${this.#make}, Модель : ${this.#model}, Пробег: ${this.#run} км`
    );
  }
}

const myCar = new Car("Toyota", "Corolla", 50000);

myCar.info();
myCar.mileage = 60000;
myCar.info();
