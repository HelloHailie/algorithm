const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  console.log(Number(input[i][0]) + Number(input[i][2]));
}
