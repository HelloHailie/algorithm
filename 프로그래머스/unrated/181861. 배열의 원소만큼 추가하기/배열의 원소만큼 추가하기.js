function solution(arr) {
    const result = [];
    for (num of arr) {
        for (i = 0; i < num; i++) {
            result.push(num);
        }
    }
    
    return result;
}