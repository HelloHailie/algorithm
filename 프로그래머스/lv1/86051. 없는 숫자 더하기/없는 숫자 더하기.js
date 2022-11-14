function solution(numbers) {
    let total = 45;
    for(let i = 0; i < numbers.length; i++){
        total = total-numbers[i]; 
    }
     return total;
}