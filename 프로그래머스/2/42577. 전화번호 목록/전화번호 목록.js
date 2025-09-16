function solution(phone_book) {
    // var answer = true;
    // return answer;
    
    const set = new Set(phone_book);
    // console.log(set);
    
    for (const num of phone_book) {
        for (let i = 1; i < num.length; i++) {
            const prefix = num.slice(0, i);
            if (set.has(prefix)) return false;
        }
    }
    
    return true;
}