// 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수
// 주고 받은 기록이 있는 경우

// 주고 받은 기록이 없거나 같은 경우
// -> 선물 지수 = 준 선물 수 - 받은 선물 수


// 사람 별로 받은 선물, 준 선물 수를 기록?
// gifts 를 중복 제거?
function solution(friends, gifts) {
    // var answer = 0;
    // console.log(friends, gifts)
    // return answer;
    
    
    // nameToIdx 처럼 map을 만들어주는게 좋다
    // 인덱스 매핑이 O(1)이므로 전체 시간 복잡도가 O(gifts.length)로 줄어들기 때문!
    const n = friends.length;
    const nameToIdx = new Map();
    friends.forEach((name, i) => nameToIdx.set(name, i)); 
    // console.log(nameToIdx);
    
    const given = Array(n).fill(0);
    const received = Array(n).fill(0);
    
    // pairCount.get("i#j") = i가 j에게 준 수
    const pairCount = new Map(); 
    // key를 "i#j" 형태로 저장 (i != j)
    const key = (i, j) => `${i}#${j}`;

    for (const rec of gifts) {
        const [from, to] = rec.split(' ');
        const i = nameToIdx.get(from);
        const j = nameToIdx.get(to);
        if (i === undefined || j === undefined) continue;

        const k = key(i, j);
        pairCount.set(k, (pairCount.get(k) || 0) + 1);

        given[i] += 1;
        received[j] += 1;
    }
    
    console.log(pairCount, given, received);

    const giftIndex = given.map((g, i) => g - received[i]);
    
    //
    const nextMonthReceived = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const ij = pairCount.get(key(i, j)) || 0;
      const ji = pairCount.get(key(j, i)) || 0;

      if (ij > ji) nextMonthReceived[i] += 1;
      else if (ij < ji) nextMonthReceived[j] += 1;
      else {
        if (giftIndex[i] > giftIndex[j]) nextMonthReceived[i] += 1;
        else if (giftIndex[i] < giftIndex[j]) nextMonthReceived[j] += 1;
      }
    }
  }

  return Math.max(...nextMonthReceived);
    
}