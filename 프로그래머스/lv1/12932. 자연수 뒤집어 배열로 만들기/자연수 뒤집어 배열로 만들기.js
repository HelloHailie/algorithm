function solution(n) {
  	let stringN = String(n)
    var answer = [];
    
    for(let i = stringN.length -1; i >= 0; i--){
        answer.push(Number(stringN[i]))
    }
 
    return answer;
}