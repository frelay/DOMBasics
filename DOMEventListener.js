"use strict";

// Получаем из разметки кнопку
const btn = document.querySelector("button");
const link = document.querySelector("a");
const container = document.querySelector(".container");
// Вешаем на наш btn обработчик по клику
btn.addEventListener("click", (event) => {
  console.log("Click");
});

const clickHandler = (event) => {
  event.preventDefault();
  console.log("Click link");
};

link.addEventListener("click", clickHandler);
// Удаление обработчика
link.removeEventListener("click", clickHandler);

// Делегирование событий

btn.addEventListener("click", (event) => {
  const div = document.createElement("div");
  const nestedBtn = document.createElement("button");
  div.textContent = Math.random();
  nestedBtn.textContent = "button";
  div.appendChild(nestedBtn);
  container.appendChild(div);
});

container.addEventListener("click", (event) => {
  console.log(event.target);
});
