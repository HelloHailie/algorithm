const fs = require("fs");
const [n, m] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const result = (n * m) / 2n;
console.log(result.toString());