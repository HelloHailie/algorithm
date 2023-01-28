const fs = require("fs");
let [A, B, V] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let day = (V - B) / (A - B);
console.log(Math.ceil(day));