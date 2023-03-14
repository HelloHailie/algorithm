function solution(num_list) {
    let odd= num_list.filter(e => e % 2 === 1).length;
    let even= num_list.filter(e => e % 2 === 0).length;
    return [even, odd];
}