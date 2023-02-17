const fs = require("fs");
let [input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

for (let i = input; i >= 0; i--) {
  console.log("*".repeat(i));
}