function solution(s) {
    const middle = parseInt(s.length/2);
    if(s.length % 2 === 0){
        return s.slice(middle-1,middle+1)
    } else {
        return s[middle]
    }
}