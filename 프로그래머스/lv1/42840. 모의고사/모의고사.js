function solution(answers) {
    let answer = [];
    let oneResult = 0;
    let twoResult = 0;
    let threeResult = 0;
    const one = [1, 2, 3, 4, 5]
    const two = [2, 1, 2, 3, 2, 4, 2, 5]
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === one[i%5]) oneResult++;
        if(answers[i] === two[i%8]) twoResult++;
        if(answers[i] === three[i%10]) threeResult++;
    }
    let max = Math.max(oneResult,twoResult,threeResult)
    
    if(max === oneResult) answer.push(1);
    if(max === twoResult) answer.push(2);
    if(max === threeResult) answer.push(3);
    
    return answer;
}
