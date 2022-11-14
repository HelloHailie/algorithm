const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")

const A = (input[0])
const B = (input[1])
const C = (input[2])
const D = (input[3])

console.log(Number(A+B)+Number(C+D))