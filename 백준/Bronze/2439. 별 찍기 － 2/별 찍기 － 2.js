const fs = require("fs");
var input = fs.readFileSync('/dev/stdin').toString();

const starNum = Number(input);
const star = "*";
const empty = " ";
let answer = "";

for (let i = starNum - 1; i >= 0; i--) {
  answer += empty.repeat(i) + star.repeat(starNum - i) + "\n";
}

console.log(answer);