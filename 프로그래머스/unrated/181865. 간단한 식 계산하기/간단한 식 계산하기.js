function solution(binomial) {
    const arr = binomial.split(' ')
    let cal = arr[1]
    if(cal === '+'){
        return Number(arr[0])+Number(arr[2])
    } else if (cal ==='-'){
        return Number(arr[0])-Number(arr[2])
    } else {
        return Number(arr[0])*Number(arr[2])
    }
}