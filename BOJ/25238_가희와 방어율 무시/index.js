const fs = require("fs");
const [a, b] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const era = a * (100 - b) * 0.01;

if (era >= 100) {
  console.log(0);
} else {
  console.log(1);
}
