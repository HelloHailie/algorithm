const fs = require("fs");
const [a, b, c, d, e] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let current = a;
let final = b;

let result = 0;

if (current < 0) {
  result = c * Math.abs(a) + d;
  current = 0;

  if (current >= 0) {
    result = result + e * (b - current);
  }
} else if (current === 0) {
  result = d + b * e;
} else {
  result = (b - current) * e;
}

console.log(result);