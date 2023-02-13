const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let [num1, num2] = input[i].split(" ");
  console.log(
    `Case #${i}: ` +
      `${num1} + ${num2} = ` +
      input[i].split(" ").reduce((acc, cur) => Number(acc) + Number(cur), 0)
  );
}