// 아메리카노, 라떼, 아무거나
// ice, hot, nothing

// ice, hot은 상관 없다
function solution(order) {
    let ame = 0;
    let latte = 0;

    order.map((a) => a.includes("cafelatte") ? latte++  : ame++);
        
    return (ame * 4500) + (latte * 5000);
}