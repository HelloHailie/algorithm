function solution(my_string, overwrite_string, s) {
    var answer = '';
    let first = [...my_string].slice(0,s).join('')
    let middle = [...overwrite_string].join('')
    let lastLength = s + overwrite_string.length
    let last = [...my_string].slice(lastLength).join('')
    answer += first
    answer += middle
    answer += last
    return answer
}