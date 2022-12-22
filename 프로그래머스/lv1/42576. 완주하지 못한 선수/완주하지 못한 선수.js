// participant의 길이만큼 반복문을 돌려서 인덱스 중에 completion의 인덱스가 없으면 리턴한다. 

function solution(participant, completion) {
    const sortedParticipant = participant.sort();
    const sortedCompletion = completion.sort();
    for(let i = 0; i < sortedParticipant.length; i++){
        if(sortedParticipant[i] !== sortedCompletion[i])
            return sortedParticipant[i];
    }
}