const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;
for (let a of input) {
  sum += a;
}
const min = parseInt(sum / 60);
console.log(min);
console.log(sum - min * 60);