function solution(letter) {
    let answer = ''
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let splitedLetter = letter.split(' ')
    for(let i = 0; i < splitedLetter.length; i++){
        let k = (splitedLetter[i])
        console.log(morse.indexOf(k)+1)
        let g = String.fromCharCode(65 + morse.indexOf(k));
        answer += g
    }
     return answer.toLowerCase();
}