const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(`${parseInt(c / b)} ${parseInt(c % b)}`);
