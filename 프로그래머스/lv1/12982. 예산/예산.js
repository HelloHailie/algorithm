// d를 오름차순으로 정리한다. 
// budget에서 d의 인덱스 순서대로 빼면서 0이 되는 값을 배열에 넣는다. 
// 배열 안의 인덱스 갯수를 출력한다. 
function solution(d, budget) {
    let answer = 0;
    d.sort((a,b) => a-b);
    for(let i of d){
        if(budget < i){
            break;
        }
        answer++;
        budget -= i;
    }
    return answer;
}