// 반복문을 돌면서 nums 배열 안에 있는 인자를 하나씩 뽑는다. (반복문 3번 돈다.)
// 뽑은 3개의 인자가 소수인지 판별한다. 
// 소수이면 answer에 더하기 1을 해준다.
function solution(nums) {
    var answer = 0;
    let randomArray = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                if(isPrime(nums[i],nums[j],nums[k])){
                    answer++
                }
            }
        }
    }
    return answer;
}

function isPrime(a,b,c){
    let sum = a+b+c;
    for(let i = 2; i <= Math.ceil(Math.sqrt(sum)); i++){
        if(sum % i === 0) {
            return false;
        }
    }
    return true;
}