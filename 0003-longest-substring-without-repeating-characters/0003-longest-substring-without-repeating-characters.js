/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 0. 기본적으로
  if (s.length <= 1) return s.length;

  // 연속된 문자의 길이를 담을 배열
  let resultBox = [];

  let isRepeat = [];

  for (let j = 0; j < s.length; j++) {
    for (let i = j; i < s.length; i++) {
      // 존재하지 않는 경우
      if (!isRepeat.includes(s[i])) isRepeat.push(s[i]);
      // 존재하는 경우 배열 비우고 이번 반복 마치기
      else {
        resultBox.push(isRepeat.length);
        isRepeat = [];
        break;
      }
    }
  }

  console.log(resultBox); // [3,3,3,3,2,2,1,1] 이 나와야 되는데..?
  resultBox.sort((a, b) => b - a);
  return resultBox[0];
};