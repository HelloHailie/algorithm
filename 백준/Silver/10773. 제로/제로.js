const fs = require("fs");
let [leng, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input = input.map(Number);

for (let i = 0; i < input.length; i++) {
  if (input[i] === 0) {
    input.splice(i - 1, 2);
    i = i - 2;
  }
}

console.log(input.reduce((acc, cur) => acc + cur, 0));