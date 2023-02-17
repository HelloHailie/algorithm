function solution(order) {
    return (order.toString().split('').filter(e => e !== '0' && e % 3 === 0).length)
}