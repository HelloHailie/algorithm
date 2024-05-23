function solution(my_string, s, e) {
    const front = my_string.slice(0,s)
    const middle = my_string.slice(s,e+1)
    const end = my_string.slice(e+1)
    const reversedMiddle = middle.split('').reverse().join('');
    return front + reversedMiddle + end
}