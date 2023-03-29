function solution(s1, s2) {
    let answer = 0;
    for(let i of s1){
        for(let j of s2){
            if(i === j){
                answer++
            }
        }
    }
    return answer;
}