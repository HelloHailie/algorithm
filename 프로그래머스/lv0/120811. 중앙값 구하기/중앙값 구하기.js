function solution(array) {
    let leng = Math.floor(array.length/2);
    return array.sort((a,b) => a-b)[leng]
}