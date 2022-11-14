const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let x of input) {
  const value = x.split(" ").map((el) => parseInt(el));

  if (value[0] === 0) break;

  value.sort((a, b) => a - b);

  if (value[0] * value[0] + value[1] * value[1] === value[2] * value[2]) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}