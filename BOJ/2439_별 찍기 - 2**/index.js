const fs = require("fs");
const input = Number(fs.readFileSync("test.txt").toString());
console.log(input);
let sum = "";
for (let i = 0; i < input; i++) {
  for (let j = input - 1; j >= 0; j--) {
    sum += " " + "*" + "\n";
  }
}

console.log(sum);
