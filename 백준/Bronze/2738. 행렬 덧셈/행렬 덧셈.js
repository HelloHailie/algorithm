const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

const [N, M] = input.shift();

let output = "";
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    output += input[i][j] + input[i + N][j] + " ";
  }
  output += "\n";
}
console.log(output);