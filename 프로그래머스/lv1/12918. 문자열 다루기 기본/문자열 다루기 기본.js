function solution(s) {
    if(s.length === 4 || s.length === 6){
        if(Number(s) === parseInt(s)) {
            return true;
        }
    }
    return false
}