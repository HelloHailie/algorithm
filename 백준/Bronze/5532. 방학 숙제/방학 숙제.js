const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const totalDay = input[0];
const korean = Math.ceil(input[1] / input[3]);
const math = Math.ceil(input[2] / input[4]);

const bigDay = Math.max(korean, math);
console.log(totalDay - bigDay);