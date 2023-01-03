function solution(num, k) {
    var answer = 0;
    answer = num.toString().split('').indexOf(k.toString())
    if(answer > -1){
        return answer + 1
    } else {
        return answer
    } 
}