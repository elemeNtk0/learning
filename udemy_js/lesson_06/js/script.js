"use strict";

// Числа
let number = 4.6;

console.log(4 / 0); // Infinity
console.log(-4 / 0); // -Infinity
console.log("string" * 9); // NaN

// Строки
const persone = "Alex";

// Boolen
const bool = true;

// null
console.log(something); //ReferenceError: something is not defined

// undefined
let und;
console.log(und); // undefined

// объекты
const obj = {
  name: "John",
  age: "25",
  isMarried: false
};

console.log(obj["name"]); // Лучше через "точку"
console.log(obj.isMarried);

// Массив (является ли массив отдельным типом данных?– НЕТ! )
let arr = [ "plum.png", "orrange.jpg", 6, false, {}, [], "apple.bmp" ];
console.log(arr[5]);
