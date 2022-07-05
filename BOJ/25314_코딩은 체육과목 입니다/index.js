const fs = require("fs");
const input = Number(fs.readFileSync("test.txt").toString().trim());

const repeatNum = input / 4;
// console.log(repeatNum);
let result = "";
for (let i = 0; i < repeatNum; i++) {
  result += "long ";
}
console.log(result + "int");
