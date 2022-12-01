function solution(nums) {
    num = nums.sort((a,b) => a-b)
    const uniqueArr = [...new Set(num)];
    const choseNum = nums.length/2
    if(uniqueArr.length >= choseNum){
        return choseNum
    } else if (uniqueArr.length < choseNum){
        return uniqueArr.length
    }
}