const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  const arr = input[i].split(" ");
  const chars = arr[1].split("");
  let result = "";
  for (let char of chars) {
    for (let j = 0; j < Number(arr[0]); j++) {
      result += char;
    }
  }
  console.log(result);
}