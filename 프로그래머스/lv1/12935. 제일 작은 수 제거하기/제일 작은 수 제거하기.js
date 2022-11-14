function solution(arr) {
    let min = Math.min(...arr)
    if(arr.length === 1) return [-1]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === min){
            arr.splice(i,1)
            i--
            return arr;
        }
    }
}