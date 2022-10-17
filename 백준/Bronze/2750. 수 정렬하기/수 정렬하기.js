const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let arr = [];
for (let i = 1; i <= input[0]; i++) {
  arr.push(input[i]);
}
const result = arr.sort((a, b) => a - b);
console.log(result.join("\n"));