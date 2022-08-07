const fs = require("fs");
const num = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const maxIndex = num.indexOf(Math.max(...num));
const minIndex = num.indexOf(Math.min(...num));

if ((maxIndex === 0 && minIndex === 1) || (maxIndex === 1 && minIndex === 0)) {
  console.log(num[2]);
} else if (
  (maxIndex === 1 && minIndex === 2) ||
  (maxIndex === 2 && minIndex === 1)
) {
  console.log(num[0]);
} else if (
  (maxIndex === 0 && minIndex === 2) ||
  (maxIndex === 2 && minIndex === 0)
) {
  console.log(num[1]);
} else {
  console.log(num[0]);
}