const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

console.log(input[0]);
console.log(input.length);
console.log(input[0].length);

const arr = [];
arr.push(input[0]);
console.log(arr);

let count = 0;
const result = arr.filter((el) => {
  el === "a" || el === "e" || el === "i" || el === "o" || el === "u";
  count += 1;
});

console.log(count);

// console.log(result);
// for (let i = 0; input.length - 1; i++) {}

// function fun() {
//   for (let i = 0; i < input.length - 1; i++) {
//     let count = 0;
//     if (
//       input[i].filter(
//         (el) =>
//           el === "a" || el === "e" || el === "i" || el === "o" || el === "u"
//       )
//     ) {
//       count++;
//     }
//   }
//   return fun();
//   return count;
// }
