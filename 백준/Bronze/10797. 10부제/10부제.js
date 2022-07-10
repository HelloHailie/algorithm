const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numA = Number(a);
const newArr = b.split(" ").map(Number);
const result = newArr.filter((e) => e === numA);

console.log(result.length);