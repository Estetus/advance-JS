"use strict";

class Person {
  constructor(race, personName, language) {
    this.race = race;
    this.personName = personName;
    this.language = language;
  }

  speak() {
    console.log(`${this.personName} говорит на языке ${this.language}.`);
  }
}

class Orc extends Person {
  constructor(race, personName, language, weapon) {
    super(race, personName, language);
    this.weapon = weapon;
  }

  speak() {
    console.log(`${this.personName} говорит на грубом ${this.language}.`);
  }

  strike() {
    console.log(`${this.personName} наносит удар. Оружие ${this.weapon}.`);
  }
}

class Elf extends Person {
  constructor(race, personName, language, spell) {
    super(race, personName, language);
    this.spell = spell;
  }

  speak() {
    console.log(
      `${this.race} по имени ${this.personName} говорит на изысканном ${this.language}.`
    );
  }
  createSpell() {
    console.log(
      `${this.personName} медитирует, чтобы создать заклинание : "${this.spell}"`
    );
  }
}

const orc = new Orc("Орк", "Дуротан", "Орочьем", "Топор");
orc.speak();
orc.strike();

const elf = new Elf("Высший эльф", "Олифия", "Эльфийском", "Магия леса");
elf.speak();
elf.createSpell();
