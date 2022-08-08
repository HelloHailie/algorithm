const fs = require("fs");
const [num, arrNum] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = arrNum.split(" ").map(Number);
const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min, max);