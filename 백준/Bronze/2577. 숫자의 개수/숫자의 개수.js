const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const answer = String(a * b * c);

for (let i = 0; i <= 9; i++) {
  let count = 0;
  for (let j = 0; j < answer.length; j++) {
    if (Number(answer[j]) === i) {
      count++;
    }
  }
  console.log(count);
}