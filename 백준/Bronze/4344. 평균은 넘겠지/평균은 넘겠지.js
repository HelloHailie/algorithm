const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const length = Number(input[0]);
input.shift();

for (let i = 0; i < input.length; i++) {
  const scoreLength = input[i].split(" ").map(Number)[0];
  const scoreArr = input[i].split(" ").map(Number).splice(1);
  const sum = scoreArr.reduce((acc, cur) => acc + cur, 0);
  const average = sum / scoreLength;
  const result =
    (scoreArr.filter((score) => score > average).length / scoreLength) * 100;
  console.log(result.toFixed(3) + "%");
}