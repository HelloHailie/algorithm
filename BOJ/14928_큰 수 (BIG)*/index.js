const fs = require("fs");
const input = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

console.log((input % 20000303).toString());
// const result = input % 20000303;
// console.log(result.toString());
