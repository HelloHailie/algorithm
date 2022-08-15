const fs = require("fs");
const num = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const hour = num[0].split(" ").map(Number)[0];
const min = num[0].split(" ").map(Number)[1];

const cookTime = Number(num[1]);
let result = 0;
const hourcal = parseInt((min + cookTime) / 60);
const mincal = parseInt((min + cookTime) % 60);

if (min + cookTime >= 60) {
  result = hour + hourcal + " " + mincal;
  if (hour + hourcal >= 24) {
    result = parseInt(hour + hourcal - 24) + " " + mincal;
  }
} else if (min + cookTime < 60) {
  result = hour + " " + (min + cookTime);
}

console.log(result);