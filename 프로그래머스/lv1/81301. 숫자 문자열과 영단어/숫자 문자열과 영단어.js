function solution(s) {
    const word_arr =
          ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i = 0; i < 10; i++){
        s = s.split(word_arr[i]).join(i)
    }
    return Number(s)
}