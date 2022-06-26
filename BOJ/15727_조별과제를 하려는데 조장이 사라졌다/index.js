// 풀이1
const fs = require("fs");
const input = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const inputNum = Number(input);

console.log(Math.ceil(inputNum));

// 풀이 2
const fs = require("fs");
const input = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const inputNum = parseInt(input / 5);

if (input % 5 === 0) {
  console.log(inputNum);
} else {
  console.log(inputNum + 1);
}
