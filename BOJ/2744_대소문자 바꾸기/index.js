const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim();

const upperCaseStr = input.toUpperCase();

let result = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] === upperCaseStr[i]) {
    result += input[i].toLowerCase();
  } else {
    result += input[i].toUpperCase();
  }
}
console.log(result);
