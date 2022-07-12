const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const minScore = input[0].split(" ").map(Number);
const manScore = input[1].split(" ").map(Number);

const minTotalScore = minScore.reduce((a, b) => a + b);
const manTotalScore = manScore.reduce((a, b) => a + b);

if (minTotalScore === manTotalScore) {
  console.log(minTotalScore);
} else {
  console.log(Math.max(minTotalScore, manTotalScore));
}