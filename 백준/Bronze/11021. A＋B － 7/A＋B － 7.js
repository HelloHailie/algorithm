const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i <= input[0]; i++) {
  console.log(
    `Case #${i}: ` +
      input[i].split(" ").reduce((acc, cur) => Number(acc) + Number(cur), 0)
  );
}