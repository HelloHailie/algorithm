function solution(numbers, k) {
    let idx = 0;
    for(let i = 0; i < k; i++){
        idx += 2;
        if(numbers.length < idx){
            idx %= numbers.length;
        }
    }
    return numbers[idx-2];
}