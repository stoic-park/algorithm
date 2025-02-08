function solution(num_list) {
    // 1. 오름 차순 정렬
    // 2. 앞에서 5개 선택
    
    return num_list.sort((a,b) => a - b).slice(0,5);

    
}