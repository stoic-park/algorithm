function solution(strArr) {
    // 1. 길이가 같은 문자열들 끼리 그룹으로 !
    const targetObj = {};
    
    for(let i of strArr) {
        const targetLength = i.length;
        targetObj[targetLength] = (targetObj[targetLength] || 0)+1;
    }

    
    return Math.max(...Object.values(targetObj));

    
}