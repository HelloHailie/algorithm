// 배열 안의 각각의 인덱스에 접근한다. 
// 각각의 인덱스를 string으로 바꾼다. 
// '7'이 있으면 answer에 1을 더해준다. 
// answer을 출력한다. 

function solution(array) {
    var answer = 0;
    const newArr = array.join('').split('');
    return newArr.filter(a => a === '7').length
    
    // return newArr
}