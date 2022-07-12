const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let empty = [];
  for (let j = input[i].length - 1; j >= 0; j--) {
    empty.push(input[i][j]);
  }
  console.log(empty.join(""));
}