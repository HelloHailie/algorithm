function solution(age) {
    var answer = '';
    let findNumObj = {
        a : 0,
        b : 1,
        c : 2,
        d : 3,
        e : 4,
        f : 5,
        g : 6,
        h : 7,
        i : 8,
        j : 9
    }
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value)
    }
    let stringAge = age.toString().split('')
    for(let i = 0; i < stringAge.length; i++){
        let k = (getKeyByValue(findNumObj,Number(stringAge[i])))
        answer += (k)
    }
    return answer;
}