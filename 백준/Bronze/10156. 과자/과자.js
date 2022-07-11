const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const price = input[0] * input[1];
const hehas = input[2];

if (price > hehas) {
  console.log(price - hehas);
} else {
  console.log(0);
}