"use strict";

// console.log(4 + +"5"); // 9

let incr = 10,
  decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(5 % 2);

console.log(2 * 4 == "8"); // true
console.log(2 * 4 === "8"); // false

const isChecked = true,
  isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);

console.log(2 + 2 * 2 === 8); // false
console.log(2 + 2 * 2 != 8); // true
console.log(2 + 2 * 2 !== 8); // true

let array = [ 0, 1, 2, 3, 4, 5, 6, 7 ];
let map = new Map();

function ebash() {
  for (let item of array) {
    map.set(Math.pow(item, 2));
  }
  console.log(map);
}

ebash();

let count = 1;

function factFor(number) {
  const temp = number;
  let result = 1;

  for (let i = 0; i < number; i++) {
    result = result * (number - i);
    // number = number - i;
  }

  return result;
}

function fact(n) {
  if (n === 1) {
    return n;
  }

  return n * fact(n - 1);
}

