'use strict';

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(num);
}

showFirstMessage('Hello Yopta!');
console.log(num);

// function существует до объявления. Т.е. консоль лог можно вызвать перед функцией
console.log(calc(10, 6));
function calc(a, b) {
  return a + b;
}

console.log(calc(4, 3));
console.log(calc(5, 6));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log('Hello');
};

logger();
