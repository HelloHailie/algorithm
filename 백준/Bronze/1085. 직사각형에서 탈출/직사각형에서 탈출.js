const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

input = input.map(Number);

let x = input[0];
let y = input[1];
let w = input[2] - input[0];
let h = input[3] - input[1];

console.log(Math.min(x, y, w, h));