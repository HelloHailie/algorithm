const fs = require("fs");
const [R, C, N] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const width = Math.ceil(R / N);
const length = Math.ceil(C / N);

console.log(width * length);