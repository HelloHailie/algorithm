const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .join(" ");

let answer = "";

if (input === "1 2 3 4 5 6 7 8") {
  answer = "ascending";
} else if (input === "8 7 6 5 4 3 2 1") {
  answer = "descending";
} else {
  answer = "mixed";
}

console.log(answer);