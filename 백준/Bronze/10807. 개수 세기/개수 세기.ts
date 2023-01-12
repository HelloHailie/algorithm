const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const newArr = input[1].split(" ");
const key = input[2];
let count = 0;
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] === key) {
    count++;
  }
}

console.log(count);