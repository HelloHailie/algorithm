const fs = require("fs");
let [num1, num2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let i = num1;
let j = num2;

while (i % j !== 0) {
  let n = i % j;
  if (n !== 0) {
    i = j;
    j = n;
  }
}
console.log(j);
console.log((num1 * num2) / j);