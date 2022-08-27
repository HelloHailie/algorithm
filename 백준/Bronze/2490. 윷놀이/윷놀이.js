const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let x of input) {
  const value = x.split(" ").map(Number);

  const sum = value.reduce((acc, cur) => acc + cur, 0);

  if (sum === 3) console.log("A");
  else if (sum === 2) console.log("B");
  else if (sum === 1) console.log("C");
  else if (sum === 0) console.log("D");
  else console.log("E");
}