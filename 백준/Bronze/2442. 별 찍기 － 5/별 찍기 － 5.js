const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(" ".repeat(num - i) + "*".repeat(2 * i - 1));
}