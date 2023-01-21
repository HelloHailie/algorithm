const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = input[0];
let result = [];

for (let i = 1; i <= Number(num); i++) {
  let count = 0;
  for (let x of input[i]) {
    count += x === "(" ? 1 : -1;
    if (count < 0) break;
  }
  result.push(count === 0 ? "YES" : "NO");
}

console.log(result.join("\n"));