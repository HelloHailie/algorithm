const fs = require("fs");
const [a, b, c, e, d] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const burger = Math.min(a, b, c);
const drink = Math.min(d, e);

console.log(burger + drink - 50);
