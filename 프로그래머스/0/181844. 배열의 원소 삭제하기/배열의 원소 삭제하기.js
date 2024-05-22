function solution(arr, delete_list) {
    var answer = [];
    answer = arr.filter(x => !delete_list.includes(x))
    return answer;
}