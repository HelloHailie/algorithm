function solution(n) {
    var answer = String(n).split('').reduce((acc,cur) => Number(acc) + Number(cur), 0)
    
      	return answer;
}

solution(6)