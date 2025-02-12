// 1. 주어진 배열 정렬
// 2. 작은 수 5개 제거 (slice)
// 3. 오름차순 정렬
function solution(num_list) {
    return num_list.sort((a,b) => a - b).slice(5);
}