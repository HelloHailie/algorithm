function solution(myString) {
    let newArr = myString.split('x')
    return newArr.map(e => e.length)
}