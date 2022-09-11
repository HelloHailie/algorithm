const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ").map(Number)

  const num1 = input[0]
  const num2 = input[1]

  let result = []
for(let i = 1; i <= num1; i++){
  if(num1 % i === 0) {
result.push(i)
  }
}


if(result[num2 -1]) {
  console.log(result[num2 -1])
} else {
  console.log(0)
}