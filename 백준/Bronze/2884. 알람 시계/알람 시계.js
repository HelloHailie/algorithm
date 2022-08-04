const fs = require("fs");
const [num1, num2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (num1 === 0) {
  if (num2 === 45) {
    console.log(num1, 0);
  } else if (num2 > 45) {
    console.log(num1, num2 - 45);
  } else {
    console.log(23, 60 - 45 + num2);
  }
}
if (num1 > 0) {
  if (num2 === 45) {
    console.log(num1, 0);
  } else if (num2 > 45) {
    console.log(num1, num2 - 45);
  } else {
    console.log(num1 - 1, 60 - 45 + num2);
  }
}