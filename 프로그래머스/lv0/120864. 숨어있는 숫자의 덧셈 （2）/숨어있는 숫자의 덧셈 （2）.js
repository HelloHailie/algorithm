function solution(my_string) {
    var answer = 0;
    for(let i = 0; i < my_string.length; i++){
        let conti = ''
        while(!isNaN(Number(my_string[i]))){
           conti += my_string[i]
           i++
        }
        answer += Number(conti)
    }
    return answer;
}