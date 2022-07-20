const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = parseInt(Math.max((a * b) / c, (a / b) * c));
console.log(result);