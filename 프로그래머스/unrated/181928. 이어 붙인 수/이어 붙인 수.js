function solution(num_list) {
    let even = ''
    let odd = ''
    num_list.map(el => el % 2 === 0 ? odd += el : even += el)
    return Number(even) + Number(odd)
}