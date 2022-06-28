const fs = require("fs");
const input = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;
for (let num of input) {
  sum += num;
}
console.log(sum);
