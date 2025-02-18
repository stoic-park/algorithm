function solution(str_list, ex) {
    const empty = [];
    
    str_list.map((a) => !a.includes(ex) ? empty.push(a) : a);
    
    return empty.join("");
}