const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim();

let result = 0;
for (let i = 0; i < input.length; i++) {
  result += Math.pow(Number(input[i]), 5);
}

console.log(result);
