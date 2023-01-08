function solution(n, numlist) {
    var answer = [];
    for(let i of numlist){
        if(i % n === 0){
            answer.push(i);
        }
    }
    return answer;
}