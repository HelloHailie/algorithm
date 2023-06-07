function solution(arr1, arr2) {
    let arr1Sum = arr1.reduce((acc,cur) => acc + cur,0)
    let arr2Sum = arr2.reduce((acc,cur) => acc + cur,0)
    if(arr1.length !== arr2.length){
        if(arr1.length > arr2.length){
            return 1;
        } else if (arr1.length < arr2.length){
            return -1
        } else {
            return 0
        }
    } else {
        if(arr1Sum > arr2Sum){
            return 1;
        } else if (arr1Sum < arr2Sum){
            return -1;
        } else {
            return 0;
        }
    } 
    return answer;
}