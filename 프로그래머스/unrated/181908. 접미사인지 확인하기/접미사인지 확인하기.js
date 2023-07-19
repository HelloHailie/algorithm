function solution(my_string, is_suffix) {
    let answer = 0;
    let reversed_string = my_string.split('').reverse()
    let reversed_suffix = is_suffix.split('').reverse()
    for(let i = 0; i < reversed_suffix.length; i++){
        if(reversed_string[i] === reversed_suffix[i]){
            answer += 1
        } else {
            answer += 0
        }
    }
    if(answer === reversed_suffix.length) {
        return 1
    } else {
        return 0
    }
}