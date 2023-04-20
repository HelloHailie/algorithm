function solution(a, b) {
    let first = a.toString() + b.toString()
    let second = 2 * a * b
    if(first === second){
        return first
    } else {
        return Math.max(first, second)   
    }
}