const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const length = Number(input[0]);
input.shift();

for (let i = 0; i < length; i++) {
  let num = input[i].split(",").map(Number);
  console.log(num[0] + num[1]);
}