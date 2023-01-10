function solution(i, j, k) {
    var answer = '';
    let result = 0;
    for(let s = i; s <= j; s++){
        answer += s;
    }
    const newArr = answer.split('');
    for(let m = 0; m < newArr.length; m++){
        if(Number(newArr[m]) === k){
            result++
        }
    }
    return result;
}