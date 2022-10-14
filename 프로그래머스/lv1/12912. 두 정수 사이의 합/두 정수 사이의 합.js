function solution(a, b) {
    let arr = [];
    if(a > b){
        for(let i = b; i <= a; i++){
            arr.push(i)
        }
        return (arr.reduce((acc,cur)=> acc+cur))
    } else if (b > a){
        for(let i = a; i <= b; i++){
            arr.push(i)
        }
        return (arr.reduce((acc,cur)=> acc+cur))
    } else {
        return (a)
    }
}