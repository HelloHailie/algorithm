const [a, b, ...arr] = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(/\s/);

console.log(a);
console.log(b);
console.log(arr);

let sum = 0;
for (let i = 0; i < Number(b) * 2; i++) {
  if (i % 2 === 0) {
    sum += arr[i] * arr[i + 1];
  }
}

console.log(sum);

if (sum === Number(a)) {
  console.log("Yes");
} else {
  console.log("No");
}
