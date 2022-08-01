const fs = require("fs");
const [num1, num2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// console.log(num1, num2);
const [a, b, c] = (num2 + "").split("").map(Number);
// console.log(a, b, c);

console.log(num1 * c);
console.log(num1 * b);
console.log(num1 * a);
console.log(num1 * num2);