const fs = require("fs");
const [input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split()
  .map((el) => Number(el));

let temp = 1;
let count = 1;

while (true) {
  if (input <= temp) {
    break;
  }
  temp = temp + 6 * count;
  count++;
}
console.log(count);