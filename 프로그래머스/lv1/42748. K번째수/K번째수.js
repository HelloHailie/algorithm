function solution(array, commands) {
    var answer = [];
   let from =commands.map(x => x[0])
   let to = commands.map(x => x[1])
   let idx = commands.map(x => x[2])
   for(let k =0; k < commands.length; k++){
let newArr = (array.slice(from[k]-1, to[k]).sort((a,b)=> a-b))
answer.push(newArr)
}
    
    return answer.map((x,y)=> x[idx[y]-1])
    
}