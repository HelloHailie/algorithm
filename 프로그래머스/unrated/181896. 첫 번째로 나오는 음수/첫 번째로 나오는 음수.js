function solution(num_list) {
    let minus = num_list.filter(e => e < 0)
    return minus.length > 0 ? num_list.indexOf(minus[0]) : -1
}