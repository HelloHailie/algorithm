const fs = require("fs");
const [a, b] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

console.log((a * b).toString());
