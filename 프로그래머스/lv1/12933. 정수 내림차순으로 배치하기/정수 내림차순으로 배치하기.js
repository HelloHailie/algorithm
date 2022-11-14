function solution(n) {
  let answer = Number(String(n).split('').sort((a,b) => b-a).join(''))
  return answer;
}