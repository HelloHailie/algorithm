function solution(n) {
    let count = 1;
    
    while(true) {
        if (factorial(count) > n) {
            return count - 1;
        } else {
            count++;
        }
    }
}

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    
    let result = 1;
    for (var i = 2; i < n + 1; i++) {
        result *= i;
    }
    
    return result;
}