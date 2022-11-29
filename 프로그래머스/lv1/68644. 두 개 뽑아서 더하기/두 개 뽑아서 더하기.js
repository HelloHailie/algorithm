function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            answer.push(numbers[i] + numbers[j])
        }
    }
    let result = answer.sort((a,b) => a-b)
    let resultAns = []
    for(let i = 0; i < result.length; i++){
        if(result[i] !== result[i+1]) {
            resultAns.push(result[i])
        }
    }
    return resultAns;
}