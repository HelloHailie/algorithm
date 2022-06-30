const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

let answer = "";
for (let i = 1; i <= Number(input[0]); i++) {
  let num = input[i].split(" ");
  answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer.trim());
