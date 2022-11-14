const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0
let arr = []

for(let x of input){
  if(x % 2 === 1){
    sum += x
    arr.push(x)
  } 
}

if(sum === 0) {
  console.log(-1)
} else {
  console.log(sum)
  console.log(Math.min(...arr))
}