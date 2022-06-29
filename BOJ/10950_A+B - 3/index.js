const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

for (let i = 1; i <= input[0]; i++) {
  console.log(Number(input[i][0]) + Number(input[i][2]));
}
