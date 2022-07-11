const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const firstNum = input[0].split(" ").map(Number);
const [a, b, c, d, e] = input[1].split(" ").map(Number);
const answer = firstNum[0] * firstNum[1];

console.log(a - answer, b - answer, c - answer, d - answer, e - answer);
