function solution(n) {
    var answer = n.toString(3)
    let result = ''
    for(let i = answer.length - 1; i >= 0; i--){
        result += answer[i]
    }
    return Number(parseInt(result,3).toString(10))
}