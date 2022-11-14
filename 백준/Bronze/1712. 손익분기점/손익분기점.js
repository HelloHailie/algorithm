const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));

if (c - b <= 0) {
  console.log(-1);
} else {
  console.log(Math.floor(a / (c - b)) + 1);
}