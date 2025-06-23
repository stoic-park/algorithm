/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    // hint 1
    // Split the array into segments. Each segment contains consecutive elements with the same number of set bits.
    // set bits: 숫자를 2진수로 표현했을 때, 1로 설정된 비트의 개수
    // 1. 숫자의 set bits를 구하는 함수를 만들자
    function countSetBits(num) {
        return num.toString(2).split('1').length - 1;
    }

    const setBitsArr = nums.map((num) => countSetBits(num));

    // 2. setBits가 같은 애들끼리 segment로 나눈다
    const segments = [];
    let start = 0;
    const n = nums.length;

    for (let i = 1; i <= n; i++) {
        if (
            i === n || // 끝이거나
            countSetBits(nums[i]) !== countSetBits(nums[i - 1]) // setBits가 다르면 분할
        ) {
            segments.push(nums.slice(start, i));
            start = i;
        }
    }

    // 3. 같은 segment 안에서 정렬하고, 이어붙인다
    const sortedSegments = segments.map(segment =>
        [...segment].sort((a, b) => a - b)
    ).flat();

    // 4. 기존 배열과 같지 않으면 true, 아니면 false
    const origin = [...nums].sort((a,b) => a - b);
    return JSON.stringify(sortedSegments) === JSON.stringify(origin);
};