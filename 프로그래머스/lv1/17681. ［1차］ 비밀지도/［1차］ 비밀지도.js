function solution(n, arr1, arr2) {
    var answer = [];
    const tmp1 = [];
    const tmp2 = [];
    const len = Math.max(...arr1).toString(2).length;
    for(let i = 0; i < n; i++){
        tmp1.push(arr1[i].toString(2))
        while(tmp1[i].length !== len){
            tmp1[i] = '0'+tmp1[i]
        }
    }
    console.log('tmp1:', tmp1)
    for(let i = 0; i < n; i++){
        tmp2.push(arr2[i].toString(2))
        while(tmp2[i].length !== len){
            tmp2[i] = '0'+tmp2[i]
        }
    }
    console.log('tmp2:', tmp2)
    for(let i = 0; i < len; i++){
        let tmp = ''
        for(let j = 0; j < len; j++){
            tmp1[i][j] == 0 && tmp2[i][j] == 0 ? tmp += ' ' : tmp += '#'
        }
        answer.push(tmp);
        tmp = ''
    }
    
    return answer;
}