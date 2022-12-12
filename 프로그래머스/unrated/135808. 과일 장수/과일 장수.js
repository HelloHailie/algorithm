function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => b-a)
    for(let i = m-1; i < score.length; i+=m){
        answer += score[i] * m
    }
    return answer;
}

// function solution(k, m, score) {
//     var answer = 0;
//     score.sort((a,b) => b-a)
//     while(score.length >= m) {
//         const arr = [];
//         for(let i = 0; i < m; i++){
//             arr.push(score.shift())
//         }
//         answer += Math.min(...arr) * m;
//     }
//     return answer;
// }
