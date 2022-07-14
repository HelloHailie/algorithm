const fs = require("fs");
const a = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(a * (a - 1));