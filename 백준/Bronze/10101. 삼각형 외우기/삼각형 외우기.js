const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (a === 60 && b === 60 && c === 60) {
  console.log("Equilateral");
} else if (a + b + c === 180 && (a === b || a === c || b === c)) {
  console.log("Isosceles");
} else if (a + b + c !== 180) {
  console.log("Error");
} else {
  console.log("Scalene");
}