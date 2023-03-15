function solution(slice, n) {
    let time = 1;
    while(slice*time < n){
        time++;
    }
    return time;
}