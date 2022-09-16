const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

const n = input[0];
const n_arr = input.slice(1, n + 1);

let sum = 0;
let count = 0;
for (let i = 0; i < n; i++) {
  if (n_arr[i]) {
    count++;
    sum += count;
  } else {
    count = 0;
  }
}

console.log(sum);