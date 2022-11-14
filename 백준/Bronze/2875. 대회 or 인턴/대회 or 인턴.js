const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let girl = input[0];
let boy = input[1];
let intern = input[2];

let count = 0;

while (true) {
  if (girl < 2 || boy < 1 || girl + boy - 3 < intern) {
    break;
  }

  girl -= 2;
  boy -= 1;
  count++;
}
console.log(count);