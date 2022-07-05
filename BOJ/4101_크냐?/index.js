const fs = require("fs");
const [...arr] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

const range = arr.indexOf(0);

for (let i = 0; i < range; i++) {
  if (i % 2 === 0) {
    // console.log(arr[i]);
    if (arr[i] === arr[i + 1]) {
      console.log("No");
    } else if (arr[i] < arr[i + 1]) {
      console.log("No");
    } else if (arr[i] > arr[i + 1]) {
      console.log("Yes");
    }
  }
}
