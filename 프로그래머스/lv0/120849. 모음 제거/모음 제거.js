function solution(my_string) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
        if(vowels.indexOf(my_string[i]) === -1){
            answer += (my_string[i])
            }
    }
    return answer;
}