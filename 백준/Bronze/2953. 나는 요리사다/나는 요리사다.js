const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n").map(el => el.split(' ').map(Number))

const line = input.map(el => el.reduce((acc, cur) => acc + cur,0))

const result = line.forEach((v, i) => {if(v === Math.max(...line)) console.log(`${i+1} ${v}`)})