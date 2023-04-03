function solution(hp) {
    var answer = 0;
    const ants = [5,3,1];
    for(let i = 0; i < ants.length; i++){
        if(hp === 0) break;
        answer += Math.floor(hp / ants[i]);
        hp %= ants[i]
    }
    return answer
}
