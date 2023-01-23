const fs = require("fs");
let [leng, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(input.sort((a, b) => a - b).join("\n"));