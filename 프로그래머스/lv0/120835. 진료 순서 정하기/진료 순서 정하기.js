function solution(emergency) {
    const sortedArr = emergency.slice().sort((a,b) => b-a)
    return emergency.map(el => sortedArr.indexOf(el) + 1)
}