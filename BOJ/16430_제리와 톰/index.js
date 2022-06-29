const fs = require("fs");
const [a, b] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(`${b - a} ${b}`);
