const fs = require("fs");
const [input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = "";
for (let i = input; i >= 1; i--) {
  answer += i + "\n";
}

console.log(answer);