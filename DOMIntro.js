"use strict";

const div = document.querySelector("div");
// Назначаем переменной div значение первого элемента div(селектора CSS) из HTML разметки
const titles = document.querySelectorAll("h1");
// Назначаем переменной titles коллекцию (NodeList) всех элементов h1(селектора CSS) из HTML разметки
// console.log(div);
// console.log([...titles]); // С помощью spread оператора и квадратных скобок преобразуем коллекцию в массив

const link = div.querySelector(".link");
// Назначаем переменной link значение класса селектора в блоке div
// console.log(link);

div.classList.add("article", "custom");
// Добавление в div классы article и custom
div.classList.remove("article");
// Удаление класса из div
// console.log(div.classList);

div.setAttribute("id", "myID");
// Добавляет атрибут для div

// Манипуляции с DOM

const title = document.querySelector("h1");
title.innerHTML = "<span>Pavel</span>"; // Добавляет в текущий элемент HTML разметку
title.textContent = "<span>new text</span>"; // Добавляет в текущий элемент текст, HTML не работает

//  Создание элемента

const span = document.createElement("span");
span.textContent = "span created";
span.classList.add("MyClass");
console.log(span);
title.appendChild(span);

const fragment = document.createDocumentFragment();
const colors = ["blue", "yellow", "orange"];
colors.forEach((color) => {
  const item = document.createElement("div");
  div.classList.add(`bg-${color}`);
  item.textContent = color;
  item.style.background = color;
  fragment.appendChild(item);
});

document.body.appendChild(fragment);

// Удаление элементов

// title.remove();
