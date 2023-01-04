function solution(my_string) {
    var answer = [];
    const newArr = my_string.split('');
    for(let i of newArr){
        if(isNaN(i) === false){
            answer.push(i)
        }
    }
   return answer.sort().map(e => Number(e));
}