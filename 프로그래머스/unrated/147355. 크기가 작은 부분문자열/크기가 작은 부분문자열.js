//p의 길이
function solution(t, p) {
    var answer = [];
    const pLength = p.length;
    for(let i = 0; i < t.length - pLength+1; i++){
        answer.push(t.slice(i,i+pLength))
    }
    return answer.filter(el => el <= p).length;
}