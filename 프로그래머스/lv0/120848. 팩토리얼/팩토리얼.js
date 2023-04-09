function solution(n) {
    let count = 1;
    let result = 1;
    for(let i = 1; i <= count; i++){
        
        let value = result *= i
        
        if(value <= n){
            count++
        }
    }
    
    return count - 1;
}