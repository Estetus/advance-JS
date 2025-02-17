"use strict";

const wrapper = document.querySelector(".wrapper");
let counter = 0;
let lastClickedButton = null;

const divContainer = document.createElement("div");
divContainer.classList.add("divClass");
divContainer.innerHTML = `Счетчик нажатий: ${counter} `;

for (let i = 1; i <= 5; i++) {
  const button = document.createElement("button");
  button.textContent = "Нажми меня";
  wrapper.append(button);
}

wrapper.append(divContainer);

wrapper.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    if (lastClickedButton && lastClickedButton !== e.target) {
      lastClickedButton.textContent = "Нажми меня";
      lastClickedButton.classList.remove("clicked");
    }
    if (e.target.textContent === "Нажми меня") {
      counter++;
      e.target.classList.add("clicked");
      divContainer.textContent = `Счетчик нажатий: ${counter}`;
    }

    e.target.textContent = "Нажата";
    lastClickedButton = e.target;
  }
});
