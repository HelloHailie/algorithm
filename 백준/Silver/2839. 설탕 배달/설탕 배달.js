const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
let isFoundAnswer = 0;

const func = function (input) {
  for (let i = parseInt(input / 5); i >= 0; i--) {
    for (let j = 0; j <= parseInt(input / 3); j++) {
      if (3 * j + 5 * i === parseInt(input)) {
        return i + j;
        isFoundAnswer = 1;
      }
    }
  }
  // 답 없음
  if (isFoundAnswer !== 1) {
    return -1;
  }
};

const result = func(input);
console.log(result);