const fs = require("fs");
const input = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) {
    console.log(i);
  }
}
