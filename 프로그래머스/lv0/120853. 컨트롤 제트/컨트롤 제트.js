function solution(s) {
    let answer = 0
    let string = [...s].join('');
    let newArr = string.split(' ')
    for(let i = 0; i < newArr.length; i++){
        if(!isNaN(parseInt(newArr[i]))){
            answer += parseInt(newArr[i])
        } else {
            answer -= parseInt(newArr[i-1])
        }
    }
    return answer;
}