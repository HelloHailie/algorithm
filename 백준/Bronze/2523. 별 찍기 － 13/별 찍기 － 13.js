const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let num = Number(input);
const r = 2 * num - 1;

for (let i = 1; i <= num; i++) {
  console.log("*".repeat(i));
}

for (let i = num - 1; i > 0; i--) {
  console.log("*".repeat(i));
}