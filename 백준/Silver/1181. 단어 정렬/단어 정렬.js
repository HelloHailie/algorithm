const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = input.shift();

input = input.filter((v, i) => i === input.indexOf(v)); // 중복제거

let sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(sorted.join("\n"));