function solution(str1, str2) {
    return [...str1].map((a,b) => a + str2[b]).join('')
}