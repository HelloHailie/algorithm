const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [x, y] = input[0].split(" ");

input.shift();
const newArr = input.join(" ").split(" ").map(Number);

let result = [];

for (let i = 0; i < x * y; i++) {
  result.push(newArr[i] + newArr[i + x * y]);
}

for (let i = 0; i < x; i++) {
  for (let j = 0; j < y; j++) {
    const firstNum = String(result.shift());
    if (j === y - 1) {
      process.stdout.write(firstNum + "\n");
    } else if (i === x - 1 && j === y - 1) {
      process.stdout.write(firstNum);
    } else {
      process.stdout.write(firstNum + " ");
    }
  }
}