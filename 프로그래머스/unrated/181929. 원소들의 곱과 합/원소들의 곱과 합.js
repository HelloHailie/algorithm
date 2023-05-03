function solution(num_list) {
    let sum = num_list.reduce((acc, cur) => acc + cur, 0)
    let multi = num_list.reduce((acc, cur) => acc * cur, 1)
    let squre = Math.pow(sum, 2)
    if(multi < squre) {
        return 1
    } else {
        return 0
    }
}