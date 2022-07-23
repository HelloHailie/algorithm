const fs = require("fs");
const [a, ...b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const realB = b.join(" ").split(" ").map(Number);

const result = realB.filter((e) => e === Number(a));

console.log(result.length);