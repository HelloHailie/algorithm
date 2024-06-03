function solution(n) {
    const arr = Array.from(Array(n), () => Array(n).fill(0));
    for(var i = 0; i < n ; i++) {
        arr[i][i] = 1
    }
    return arr;
}