const fs = require("fs");
const input = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const num = input.length;

let sum = 0;
for (let i = 0; i < num; i++) {
  if (input[i] < 40) {
    input[i] = 40;
  }
  sum += input[i];
}
console.log(sum / num);
