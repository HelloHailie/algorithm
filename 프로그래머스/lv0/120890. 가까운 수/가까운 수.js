function solution(array, n) {
    let newArr = [];
    array = array.sort((a,b)=> a-b)
    for(let i = 0; i < array.length; i++){
        newArr.push(Math.abs(array[i] - n))
    }
    let min = Math.min(...newArr)
    let index = (newArr.indexOf(min))
    return array[index]
}