function solution(myString, pat) {
    var answer = [];
    for(let i = 0; i < myString.length; i++){
        if(myString[i] === 'A') {
            answer.push('B')
        } else {
            answer.push('A')
        }
    }
    return(answer.join('').includes(pat) === true ? 1 : 0)
} 