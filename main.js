"use strict";

const countDownElement = document.getElementById("countdown");

function updateCountDown() {
  const now = new Date(); // Дата сейчас

  const nextYear = now.getFullYear() + 1; // Следующая дата

  const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`); // конечная дата

  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate(); // сколько дней в месяце

  const end = newYearDate - now;

  if (end <= 0) {
    countDownElement.textContent = "С новым Годом!";
    clearInterval(timer);
    return;
  }

  const months = Math.floor(end / (1000 * 60 * 60 * 24 * daysInMonth));
  const days = Math.floor(end / (1000 * 60 * 60 * 24)) % daysInMonth;
  const hours = Math.floor((end / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((end / (1000 * 60)) % 60);
  const seconds = Math.floor((end / 1000) % 60);

  countDownElement.textContent = `
      ${months} месяцев, ${days} дней,
      ${hours} часов, ${minutes} минут,
      ${seconds} секунд
  `;
}

const timer = setInterval(updateCountDown, 1000);
