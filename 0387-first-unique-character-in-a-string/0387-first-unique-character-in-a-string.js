/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // 순서대로 배열하면서 중복되지 않은 경우 해당 index 리턴
    // indexOf, lastIndexOf를 이용
    // 아무래도 이 방법은 아닌 것 같은데
    
    let result = -1;

    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            result = i;
            break;
        }
    }
    return result;
};