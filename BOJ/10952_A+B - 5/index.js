const input = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");
// console.log(input);
// console.log(input.length);

// let v = input[0].split(" ");
// console.log(v[1]);

// console.log(Number(input[0][0]) + Number(input[0][2]));
// console.log(Number(input[1][0]) + Number(input[1][2]));
// console.log(Number(input[2][0]) + Number(input[2][2]));
// console.log(Number(input[3][0]) + Number(input[3][2]));
// console.log(Number(input[4][0]) + Number(input[4][2]));
// console.log(Number(input[5][0]) + Number(input[5][2]));

for (let i = 0; i < input.length - 1; i++) {
  let number = input[i].split(" ").map((e) => e * 1);
  console.log(number[0] + number[1]);
}

// for (let i = 0; i < input.length - 1; i++) {
//   console.log(Number(input[i][0]) + Number(input[i][2]));
// }
