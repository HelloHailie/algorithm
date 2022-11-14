function solution(s) {
    let count = 0;
    let answer = '';
    for(let i = 0; i < s.length; i++){
        if(s[i] !== ' '){
            if (count % 2 === 0) {
             answer += s[i].toUpperCase()
          } else {
             answer += s[i].toLowerCase()
          }
            count++
       } else {
            answer += ' '
           count = 0
       }
    }
    return answer;
}