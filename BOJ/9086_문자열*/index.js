const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  // for (let j = 0; j < input[i].length; j++) {
  let first = input[i][0];
  let end = input[i].length - 1;
  let last = input[i][end];

  console.log(`${first}${last}`);

  // }
}
