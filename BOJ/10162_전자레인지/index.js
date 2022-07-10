const fs = require("fs");
const [input] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (input % 10 !== 0) {
  console.log(-1);
} else {
  let a = parseInt(input / 300);

  let b = parseInt((input - a * 300) / 60);

  let c = parseInt((input - a * 300 - b * 60) / 10);
  console.log(a, b, c);
}
