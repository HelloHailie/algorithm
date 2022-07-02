const fs = require("fs");
const input = Number(fs.readFileSync("test.txt").toString());

if (input % 4 === 0) {
  if (input % 400 === 0 || input % 100 !== 0) {
    console.log(1);
  } else {
    console.log(0);
  }
} else {
  console.log(0);
}
