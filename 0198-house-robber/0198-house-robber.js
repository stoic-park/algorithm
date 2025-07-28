/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 인접한 집을 털지 않으면 된다
    // i번째 집까지의 최대 금액은
    // i-1번째 집까지의 최대 금액과  // prev1
    // i-2번째 집까지의 최대 금액 + 현재 집을 털었을 때 금액 중에 큰값을 선택 prev2 + nums[i]

    // bottom up vs top down 알아보자



    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    // 초기값 설정
    let prev2 = nums[0];            // i - 2
    let prev1 = Math.max(nums[0], nums[1]); // i - 1

    for(let i = 2; i< nums.length; i++) {
        const current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};