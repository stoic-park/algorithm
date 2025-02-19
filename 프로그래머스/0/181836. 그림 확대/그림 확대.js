// 가로, 세로 2번씩 해주면 되는거잖아..?
// 문자열 반복 repeat, 배열 push
function solution(picture, k) {
    const answer = [];
    
    for(let i of picture) {
        const target = i.split("");

        for(let j=0; j<k; j++) {
                    const target2 = target.map((el) => el.repeat(k));
            answer.push(target2.join(""));
        }
    }
    return answer;
}