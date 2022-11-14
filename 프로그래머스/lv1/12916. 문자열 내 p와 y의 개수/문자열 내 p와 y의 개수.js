function solution(s){
    let S = s.toLowerCase();
    let p = [];
    let y = [];
    for(let i = 0; i < S.length; i++) {
        if(S[i] === 'p') {
          p.push(S[i]);
          console.log(p);
        } else if(S[i] === 'y'){
          y.push(S[i])
        } 
    }

    if(p.length !== y.length) {
        return false;
    } else {
        return true;
    }
}