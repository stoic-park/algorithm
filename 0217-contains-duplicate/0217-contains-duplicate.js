/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // 문제를 보자 이런 생각이 들었다
    // 중복을 제거한 배열의 길이와, 기존 배열의 길이가 같지 않다면 true, 아니면 false
    const set = new Set(nums);
    const targetLength = [...set].length;

    return nums.length !== targetLength ? true : false
};