const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

const getLCM = (n, m) => {
  const gcd = (a, b) => {
    if (b === 0) return a; // 나누어지면 a 리턴
    return gcd(b, a % b); // 나누어지지 않는다면 b와 a%b를 다시 나눈다
  };
  const lcm = (a, b) => (a * b) / gcd(a, b); // 두 수의 곱을 최대공약수로 나눈다.
  return console.log(lcm(n, m));
};

for (let i = 0; i < input.length; i++) {
  let [num1, num2] = input[i].split(" ").map(Number);
  getLCM(num1, num2);
}