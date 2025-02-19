function solution(arr, k) {
    return arr.map((a) => k % 2 === 1 ? a*k : a+k);
}