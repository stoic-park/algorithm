function solution(m, n, puddles) {
    // 흠.. dp..로 규칙을 찾아야 하는데 
    // 규칙에서 물에 잠긴 지역이라면 빼고 계산하면 되지 않을까?
    // dp(m,n) = dp(m,n-1) + dp(m-1, n)
    // dp(4,3) = dp(4,2) + dp(3,3)
    // 여기서, [2,2] 는 빼야함
    // 예를 들어서 dp(3,2) = dp(3,1) + dp(2,2) 인데 dp(2,2) 는 물에 잠긴 지역이므로 0
    
    // dp(2,2) = dp(2,1) + dp(1,2) 인데 계산 필요 없이 2,2는 0이야 이런식으로 해버리면 된다 이거지

    // 4,3, [2,2]
    // dp(4,3) = dp(4,2) + dp(3,3)
    
    // dp(4,2) = dp(4,1) + dp(3,2) 
    // dp(3,2) = dp(3,1) + dp(2,2)
    
    // dp(3,3) = dp(3,2) + dp(2,3)
    // dp(3,2) = dp(3,1) + dp(2,2) 
    
    
    const TARGET = 1000000007;
    
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    
    // 물웅덩이 표시 (true면 못 감)
    const blocked = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));
    for (const [x, y] of puddles) {
        if (x >= 1 && x <= m && y >= 1 && y <= n) blocked[y][x] = true; // [x,y] 주의
    }
    // console.log(blocked);
    
    // 시작점
    dp[1][1] = blocked[1][1] ? 0 : 1;

    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= m; x++) {
            if (y === 1 && x === 1) continue; // 시작점 이미 설정
            if (blocked[y][x]) {
                dp[y][x] = 0;
            } else {
                const fromTop = dp[y - 1]?.[x] ?? 0;
                const fromLeft = dp[y][x - 1] ?? 0;
                dp[y][x] = (fromTop + fromLeft) % TARGET;
            }
        }
    }

  return dp[n][m] % TARGET;
    
}