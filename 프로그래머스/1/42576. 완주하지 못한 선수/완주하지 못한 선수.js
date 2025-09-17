function solution(participant, completion) {
    // var answer = '';
    // return answer;
    
    // 해시란 무엇인가..
    
    // for 로 순환을 한다면 O(n)인가?
    // 더 나은 방법은?
    // 존재하지 않는 경우 바로 리턴하는 경우라면 복잡도를 낮출 수 있겠지
    // js method 를 잘 고르면 된다
    // 동명이인이 존재할 수 있다!
    
//     for(let i=0; i<completion.length; i++) {
//         const target = completion[i];
//         const targetIndex = participant.indexOf(target);
//         // console.log(targetIndex);
//         participant.splice(targetIndex,1);
//     }
    
//     return participant[0];
    

    // 이렇게 하면 효율성 테스트를 통과하지 못하는데..?
    // map 객체를 사용해보자
    
    const map = new Map();
    
    for(const i of participant) {
        // 있으면 추가, 없으면 생성
        map.set(i, (map.get(i) || 0) + 1);
    }
    
    
    for (const c of completion) {
        map.set(c, map.get(c) - 1);
    }

    // console.log(map);
    
    // 1인사람 사람
    
    for (const [key, value] of map) {
        if (value > 0) return key;
    };
    
    
    
}