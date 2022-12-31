function solution(array) {
    var answer = [];
    let max = Math.max(...array)
    answer.push(max)
    answer.push(array.indexOf(max))
    return answer;
}