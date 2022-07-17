const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (b === 1 || b === 2) {
  console.log("NEWBIE!");
} else if (b <= a) {
  console.log("OLDBIE!");
} else {
  console.log("TLE!");
}