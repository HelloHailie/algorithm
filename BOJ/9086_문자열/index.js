const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

for (let i = 0; i <= Number(input[0]); i++) {
  for (let j = 1; j <= input[i]; j++) {
    console.log(input[j][j]);
  }
}
