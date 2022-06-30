const [a, b] = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(
  `${Math.floor(a + b)} \n${Math.floor(a - b)} \n${Math.floor(
    a * b
  )} \n${Math.floor(a / b)} \n${a % b}`
);
