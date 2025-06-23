/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // nums 자체를 변경
    // 직관적으로 봤을 때,
    // 마지막 숫자를 떼서, 가장 앞에
    // k번 반복
    for (let i = 0; i < k; i++) {
        const last = nums.pop();      
        nums.unshift(last);           
    }




};