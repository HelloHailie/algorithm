const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = 0;
if (a === b && a === c && b === c) {
  result = 10000 + a * 1000;
} else if (a === b) {
  result = 1000 + a * 100;
} else if (a === c) {
  result = 1000 + a * 100;
} else if (b === c) {
  result = 1000 + b * 100;
} else {
  result = Math.max(a, b, c) * 100;
}

console.log(result);
