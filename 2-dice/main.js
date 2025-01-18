"use strict";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function dice(type) {
  const diceType = {
    D4: 4,
    D5: 5,
    D6: 6,
    D8: 8,
    D10: 10,
    D12: 12,
    D16: 16,
    D20: 20,
  };

  const sides = diceType[type];
  return random(1, sides);
}

console.log(dice("D20"));
