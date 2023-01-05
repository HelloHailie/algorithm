function solution(box, n) {
    return box.map(e => parseInt(e/n)).reduce((acc,cur) => acc * cur , [1])
}