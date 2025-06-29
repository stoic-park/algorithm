/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 정렬해서 같으면 true
    const target1 = s.split('').sort().join('');
    const target2 = t.split('').sort().join('');
    return target1 === target2;
};