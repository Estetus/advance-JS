"use strict";

const Person = function (race, personName, language) {
  this.race = race;
  this.personName = personName;
  this.language = language;
};

Person.prototype.speak = function () {
  console.log(`${this.personName} говорит на языке ${this.language}.`);
};

const Orc = function (race, personName, language, weapon) {
  Person.call(this, race, personName, language);
  this.weapon = weapon;
};
//Использовал так называемое паразитическое композиционное наследование ,
//  так как с помощью только call не копировались методы

Orc.prototype = Object.create(Person.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.strike = function () {
  console.log(`${this.personName} наносит удар. Оружие ${this.weapon}.`);
};

const Elf = function (race, personName, language, spell) {
  Person.call(this, race, personName, language);
  this.spell = spell;
};

Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function () {
  console.log(
    `${this.personName} медитирует, чтобы создать заклинание : "${this.spell}"`
  );
};

const orc = new Orc("Орк", "Дуротан", "Орочий", "Топор");
orc.speak();
orc.strike();

const elf = new Elf("Высший эльф", "Олифия", "Эльфийский", "Магия леса");
elf.speak();
elf.createSpell();
