function solution(num_list) {
    let odd = 0;
    let even = 0;
    num_list.map((_,idx) => {
        if(idx % 2) {
            odd += _
        } else {
            even += _
        }
    })
    return odd >= even ? odd : even
}