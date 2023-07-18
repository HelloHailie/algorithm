function solution(arr) {
    return arr.map(e => (e % 2 === 0 && e > 50) || (e % 2 === 0 && e === 50) ? e / 2 : (e % 2 === 1 && e < 50 ) ? e * 2 : e)
}