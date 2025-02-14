"use strict";

const obj = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

console.log(obj);

const uniqId = new Set(obj.map((item) => item.id));

console.log(uniqId);

const newArray = [...uniqId].map((id) => obj.find((item) => item.id == id));

console.log(newArray);
