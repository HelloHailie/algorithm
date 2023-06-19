function solution(n) {
    var answer = [];
    answer.push(n)
    while(n > 1){
        if(n % 2) {
            n = 3 * n + 1
            answer.push(n)
        } else {
            n = n / 2
            answer.push(n)
        }   
    }
    return answer;
}