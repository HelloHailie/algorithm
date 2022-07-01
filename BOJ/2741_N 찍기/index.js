const fs = require("fs");
const input = Number(fs.readFileSync("test.txt").toString().trim());

let result = "";
for (let i = 1; i <= input; i++) {
  result += i + "\n";
}
console.log(result);
