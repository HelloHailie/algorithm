const fs = require("fs");
let [num1, num2] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let newArr = num2
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(newArr[0] * newArr[num1 - 1]);