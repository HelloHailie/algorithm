const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

// 1. 받은 문자열을 배열안에 넣는다. (빈 배열에 push 해주기)
// 2. 배열 안의 문자열 중 모음이 있으면 숫자 count를 +1 해준다.
// 3. 이 과정을 input의 갯수-1만큼 한다.

while (true) {
  let ans = 0;
  for (let i = 0; i < input.length - 1; i++) {}
}

// console.log(input[0]);
// console.log(input.length);
// console.log(input[0].length);

// const arr = [];
// arr.push(input[0]);
// console.log(arr);

// let count = 0;
// const result = arr.filter((el) => {
//   el === "a" || el === "e" || el === "i" || el === "o" || el === "u";
//   count += 1;
// });

// console.log(count);

for (let i = 0; i < input.length - 1; i++) {
  const arr = [];
  arr.push(input[i]);

  const result = arr.filter((el) => {
    let count = 0;
    el === "a" || el === "e" || el === "i" || el === "o" || el === "u";
    count += 1;
  });
}
console.log(count);
