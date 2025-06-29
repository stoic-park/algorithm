/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // 교집합을 구해라
    // 결과의 각 요소는 두 배열에 표시되는 횟수만큼 나타나야 하며, 순서에 상관없이 결과를 반환할 수 있습니다.

    // follow up
    // 주어진 배열이 이미 정렬되어 있다면 어떻게 해야 할까요? 알고리즘을 어떻게 최적화할까요?
    // nums1의 크기가 nums2의 크기에 비해 작다면 어떻게 해야 할까요? 어떤 알고리즘이 더 좋을까요?
    // nums2의 요소가 디스크에 저장되어 있는데 메모리가 제한되어 있어 모든 요소를 한 번에 메모리에 로드할 수 없다면 어떻게 해야 할까요?
    
    // 두 배열의 길이를 비교해서, 작은 배열을 기준으로 긴 배열의 원소들과 비교해서 중복되는 경우에 결과 배열에 넣는다..?

    const result = [];

    // 1. 두 배열의 길이를 비교해서 정렬
    const sortedArrays = nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2];
    // console.log(sortedArrays[0])

    // 2. 긴 배열을 기준으로 반복
    for(let num of sortedArrays[0]) {
        const index = sortedArrays[1].indexOf(num);
        // console.log(index);
        if(index !== -1) {
            // 긴 배열에 존재하면 결과 배열에 푸쉬, 그리고 중복 방지를 위해 해당 요소 제거
            result.push(num); 
            sortedArrays[1].splice(index, 1);
        }
    }
    
    return result;
};