const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sum = input[0];
const div = input[1];
const a = (sum + div) / 2;
const b = sum - a;
if (a<0 || b<0 || Math.floor(a) !== a) {
  console.log(-1);
} else {
  console.log(`${Math.max(a, b)} ${Math.min(a, b)}`);
}