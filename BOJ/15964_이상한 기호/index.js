const fs = require("fs");
const [A, B] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log((A + B) * (A - B));
