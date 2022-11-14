function solution(n) {
    var answer = Math.sqrt(n);
    if(answer % 1 === 0) return Math.pow(answer+1,2)
    else return -1
}