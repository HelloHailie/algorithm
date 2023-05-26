function solution(myString) {
    return [...myString.replaceAll('a', 'A')].map(e => e.charCodeAt() > 65 && e.charCodeAt() < 97 ? e.toLowerCase() : e).join('')        
}