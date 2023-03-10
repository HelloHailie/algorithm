function solution(my_string, n) {
    // var answer = '';
    // return answer;
    return [...my_string].map(e => e.repeat(n)).join('')
}