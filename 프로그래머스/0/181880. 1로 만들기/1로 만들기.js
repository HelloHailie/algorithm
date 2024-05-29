function countOperations(n) {
    let count = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            n = Math.floor(n / 2);
        } else {
            n = Math.floor((n - 1) / 2);
        }
        count += 1;
    }
    return count;
}

function solution(num_list) {
    let totalOperations = 0;
    for (let num of num_list) {
        totalOperations += countOperations(num);
    }
    return totalOperations;
}