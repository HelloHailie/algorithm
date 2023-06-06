function solution(num_list) {
    let leng = num_list.length -1
    if(num_list[leng] > num_list[leng - 1]){
        num_list.push(num_list[leng] - num_list[leng - 1])
    } else {
        num_list.push(num_list[leng] * 2)
    }
    return num_list
}