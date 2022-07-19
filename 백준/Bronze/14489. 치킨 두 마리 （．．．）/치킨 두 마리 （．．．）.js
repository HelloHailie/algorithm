const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [bank1, bank2] = input[0].split(" ").map(Number);
const chicken = Number(input[1]);

let result = 0;
if (bank1 + bank2 < chicken * 2) {
  result = bank1 + bank2;
} else {
  result = bank1 + bank2 - chicken * 2;
}

console.log(result);