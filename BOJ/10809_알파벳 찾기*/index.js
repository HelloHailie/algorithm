const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim();

let str = "";
let result = [];
for (let i = 97; i <= 122; i++) {
  str += String.fromCharCode(i);
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));
