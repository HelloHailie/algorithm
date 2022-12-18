function solution(before, after) {
    const sortBefore = before.split('').sort()
    const sortAfter = after.split('').sort()
    console.log(sortBefore, sortAfter)
    return sortBefore.filter((el,idx) => el === sortAfter[idx]).length === sortAfter.length ? 1 : 0;
}