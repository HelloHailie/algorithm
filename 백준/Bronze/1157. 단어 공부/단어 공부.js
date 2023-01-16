const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase();

const obj = {};

for (let i = 0; i < input.length; i++) {
  if (obj[input[i]] === undefined) {
    obj[input[i]] = 1;
  } else {
    obj[input[i]]++;
  }
}

let count = 0;
let result = "";

for (item in obj) {
  if (obj[item] > count) {
    count = obj[item];
    result = item;
  } else if (obj[item] === count) {
    result = "?";
  }
}

console.log(result);
