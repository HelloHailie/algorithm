const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [a, b, c, d] = input.join(" ").split(" ").map(Number);

if (a + d >= b + c) {
  console.log(b + c);
} else {
  console.log(a + d);
}