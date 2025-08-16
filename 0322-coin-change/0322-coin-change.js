/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // amount를 만족하는 가장 작은 coin의 수를 리턴하라

    // 풀이 1.
    // 11을 만드는 경우의 수는 여럿 존재하고, 그 중에 최소 갯수를 찾으려면..?
    // 우선 가장 큰 숫자를 많이 사용하는 것이 확률이 높겠지
    // 만약, 1,2,3,4,5 로 이루어진, 14라면
    // 그래서 만약에 14라고 하면
    // 14 = 5, 5, 4
    // 가장 큰수로 나누고 나눈 값을 result에 더하기, 나머지를 그 다음 큰 값으로 나누기
    // 나머지가 0이 되면 return, 아니면 -1  리턴..?
    // 만약, 3,5 로 이뤄져있고, 14라면
    // 14 = 5, 5, .. 나머지 4 x
    let result = 0;

    coins.sort((a,b) => b - a);

    for(let i of coins) {
        if(amount === 0) return result;
        const target = Math.floor(amount / i); 
        result += target;
        amount -=i * target;
    }

    return amount === 0 ? result : -1;

    // 이렇게 풀면, 큰 숫자부터 무조건 사용해야 하기 때문에, 중간 숫자만으로 가능한 경우의 수를 커버 불가능하다


};