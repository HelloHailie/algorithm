function solution(a, b, n) {
    let recycle = 0;
    while(n >= a){
        recycle += Math.floor(n/a) * b;
        n = Math.floor(n/a)*b + n%a
    }
    return recycle;
}

