const fs = require("fs");
const num = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const max = Math.max(...num);
console.log(max);

const idx = num.indexOf(max);
console.log(idx + 1);