// 1. 문자열 분해
// 2. 숫자로 바꿔서 합
function solution(num_str) {
    const target = num_str.split("").reduce((a,b) => Number(a) + Number(b), 0);
    return target;
}