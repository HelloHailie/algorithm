function solution(order) {
    var answer = 0;
    order.forEach(e => answer += e.includes('cafelatte') ? 5000 : 4500);
    return answer;
}