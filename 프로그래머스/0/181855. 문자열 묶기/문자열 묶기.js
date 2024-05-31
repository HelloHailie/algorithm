function solution(strArr) {
    const countArr = [0];
    for(let i = 0; i < strArr.length; i++) {
        const count = strArr[i].length;
        if (countArr[count] === undefined) {
            countArr[count] = 0;
        }
        countArr[count]++;
    }
    return Math.max(...countArr);
}