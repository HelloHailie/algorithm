function solution(n, k) {
    let bonus = 0;
    if(n >= 10){
        bonus = Math.floor(n / 10);
    }
    return n * 12000 + k * 2000 - bonus * 2000;
}