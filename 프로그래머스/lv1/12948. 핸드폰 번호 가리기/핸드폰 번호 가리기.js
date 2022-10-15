function solution(phone_number) {
    const front = phone_number.slice(0,-4);
    const back = phone_number.slice(-4)
    return '*'.repeat(front.length) + back;
}