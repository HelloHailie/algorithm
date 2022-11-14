function solution(x) {
    let sum = String(x).split('').map(Number).reduce((acc, cur) => acc + cur ,0)
  if(x % sum === 0){
    return true;
  } else {
    return false;
  }
}