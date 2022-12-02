function solution(n) {
    let answer = []
    for(let i = 1; i <= n; i++){
        if(isPrime(i)) answer.push(i);
    }
    return answer.length;
}

const isPrime = (n) => {
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
}