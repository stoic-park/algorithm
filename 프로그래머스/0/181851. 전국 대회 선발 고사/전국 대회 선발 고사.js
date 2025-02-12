// 1. 불참 여부로 필터링
// 2. 정렬
// 3. 인덱스값 찾아서 계산
function solution(rank, attendance) {
//     const target = rank.filter((a, index) => attendance[index] === true).sort((a,b) => a - b);

//     const rank1 = rank.indexOf(target[0]);
//     const rank2 = rank.indexOf(target[1]);
//     const rank3 = rank.indexOf(target[2]);
    
//     return (10000*rank1) + (100*rank2) + rank3;

    const [a,b,c] = rank.map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);

    return 10000 * a[1] + 100 * b[1] + c[1];
    
}