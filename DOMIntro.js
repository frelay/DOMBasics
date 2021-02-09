"use strict";

const div = document.querySelector("div");
// Назначаем переменной div значение первого элемента div(селектора CSS) из HTML разметки
const titles = document.querySelectorAll("h1");
// Назначаем переменной titles коллекцию (NodeList) всех элементов h1(селектора CSS) из HTML разметки
console.log(div);
console.log([...titles]); // С помощью spread оператора и квадратных скобок преобразуем коллекцию в массив
