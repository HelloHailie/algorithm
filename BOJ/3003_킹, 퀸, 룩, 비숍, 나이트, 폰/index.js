const fs = require("fs");
const input = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const answer = [1, 1, 2, 2, 2, 8];
let result = [];
for (let i = 0; i < input.length; i++) {
  result.push(answer[i] - input[i]);
}
console.log(result.join(" "));
