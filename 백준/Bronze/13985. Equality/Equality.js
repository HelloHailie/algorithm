const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const num1 = input[0];
const num2 = input[2];
const answer = input[4];

if (num1 + num2 === answer) {
  console.log("YES");
} else {
  console.log("NO");
}