const fs = require("fs");
const num = fs.readFileSync("/dev/stdin").toString();

const star = "*";

for (let x = num; x > 0; x--) {
  console.log(" ".repeat(num - x) + star.repeat(x));
}