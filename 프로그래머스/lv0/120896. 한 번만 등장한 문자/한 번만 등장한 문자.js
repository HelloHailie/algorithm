function solution(s) {
    let answer = []
    let x = [...new Set(s)];
    for(let i = 0; i < x.length; i++){
        if(s.indexOf(x[i]) === s.lastIndexOf(x[i])){
            answer.push(x[i])
        }
    }
    return answer.sort().join('')
}