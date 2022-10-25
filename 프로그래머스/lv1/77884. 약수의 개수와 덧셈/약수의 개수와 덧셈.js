function solution(left, right) {
    let result = 0
    for(let i = left; i <= right; i++){
        let arr = []
        for(let j = 0; j <= i; j++){
            if(i%j===0){
                arr.push(j)
            }
        }
       if(arr.length%2===0){
           result+=i
       } else{result-=i}
    }
    return result
}