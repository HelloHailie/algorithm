function solution(my_string) {
    let answer = 0;
    // return answer;
    // return [...my_string].map(e => typeof Number(e))
    for(let i of my_string){
        if(isNaN(i) === false){
            answer += parseInt(i)
        }
    }
    return answer;
}