/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 처음부터 반복하는 방법 X, 가운데(?)서 확인하는 방법
    // 투 포인터 방식(left, right)
    // 홀수, 짝수 팰린드롬 구분

    // 
    let longestString = "";

    // 팰린드롬 확인하는 함수
    const getPalindromic = (left, right) => {  
        while( (left >= 0 && right < s.length) && (s[left] === s[right]) ) {
            left -= 1;
            right += 1;
        }
        return s.substring(left + 1, right);
    }
    
    
    for(let i = 0; i < s.length; i++) {
        // 홀수, 짝수 구분
        const oddSubstring = getPalindromic(i,i);
        const evenSubstring = getPalindromic(i,i+1);
    
        longestString = [longestString, oddSubstring, evenSubstring].reduce((prev, str) => str.length > prev.length ? str : prev);
    }

    
    return longestString;
};