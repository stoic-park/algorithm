function solution(arr, n) {
    // 1. 배열길이 홀수, 짝수
    // 홀수인 경우 
    if(arr.length % 2 === 1) return arr.map((a, i) => i % 2 === 0 ? a + n : a);
    return arr.map((a, i) => i % 2 === 1 ? a + n : a);

}