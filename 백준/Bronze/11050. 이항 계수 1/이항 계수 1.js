const fs = require("fs");
let [num1, num2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let share = 1;
for (let i = num1; i > num1 - num2; i--) {
  share *= i;
}
let cal = 1;
for (let j = num2; j >= 1; j--) {
  cal *= j;
}

console.log(share / cal);