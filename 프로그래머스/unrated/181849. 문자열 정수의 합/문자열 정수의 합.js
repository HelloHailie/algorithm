function solution(num_str) {
    var answer = 0;
    return [...num_str].reduce((acc, cur) => acc + Number(cur),0)
    // return answer;
}