const fs = require("fs");
const input = Number(fs.readFileSync("test.txt").toString().trim());

let result = "";
if (input >= 90 && input <= 100) {
  result = "A";
} else if (input >= 80) {
  result = "B";
} else if (input >= 70) {
  result = "C";
} else if (input >= 60) {
  result = "D";
} else {
  result = "F";
}

console.log(result);
