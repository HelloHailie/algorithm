const fs = require("fs");
const [a, b, c, d, e, f] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = a + b + c + d + e + f;
const min1 = Math.min(a, b, c, d);
const min2 = Math.min(e, f);

console.log(sum - min1 - min2);