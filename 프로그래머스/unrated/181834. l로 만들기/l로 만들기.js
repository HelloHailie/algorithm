function solution(myString) {
    var answer = '';
    for(let i = 0; i < myString.length; i++){
        if(myString[i].charCodeAt(0) < 'l'.charCodeAt(0)){
            myString = myString.replace(myString[i],'l')
        }
    }
    return myString
    
}