const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let num = Number(input);

for (let i = num; i > 0; i--) {
  console.log(" ".repeat(num - i) + "*".repeat(2 * i - 1));
}
for (let i = 2; i <= num; i++) {
  console.log(" ".repeat(num - i) + "*".repeat(2 * i - 1));
}
