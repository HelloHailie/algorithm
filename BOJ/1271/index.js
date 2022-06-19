const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const firNum = BigInt(input[0]);
const secNum = BigInt(input[1]);

console.log(firNum / secNum + '\n' + (firNum % secNum));

// BigInt와 Number는 어떤 면에서 비슷하지만 중요한 차이점이 있습니다.
// 예컨대 BigInt는 내장 Math 객체의 메서드와 함께 사용할 수 없고, 연산에서 Number와 혼합해 사용할 수 없습니다.
// 따라서 먼저 같은 자료형으로 변환해야 합니다. 그러나, BigInt가 Number로 바뀌면 정확성을 잃을 수 있으니 주의해야 합니다.
// by mdn
