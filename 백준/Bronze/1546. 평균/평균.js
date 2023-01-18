const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[1];

const newArr = input.split(" ").map(Number);
const max = Math.max(...newArr);
const newScore = newArr.map((e) => (e / max) * 100);
const result = newScore.reduce((acc, cur) => acc + cur, 0);
console.log(result / newArr.length);