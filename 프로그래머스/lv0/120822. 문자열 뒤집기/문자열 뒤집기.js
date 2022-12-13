function solution(my_string) {
    return [...my_string].reverse().join('');
}

// function solution(my_string) {
//     var answer = '';
//     const lengthNum = my_string.length;
//     for(let i = lengthNum-1; i >= 0; i--){
//         answer += my_string[i]
//     }
//     return answer;
// }