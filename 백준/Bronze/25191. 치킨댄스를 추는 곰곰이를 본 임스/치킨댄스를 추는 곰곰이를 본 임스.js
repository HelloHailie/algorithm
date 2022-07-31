const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const chicken = Number(a);
const [coke, beer] = b.split(" ").map(Number);

const cal = coke / 2 + beer;

const result = Math.min(chicken, cal);

console.log(Math.floor(result));
