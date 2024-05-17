function solution(arr, n) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.length % 2 === 1 && i % 2 === 0){
            answer.push(arr[i]+n);
        } else if (arr.length % 2 === 0 && i % 2 === 1){
            answer.push(arr[i]+n);
        } else {
            answer.push(arr[i]);
        }
    }
    return answer;
}