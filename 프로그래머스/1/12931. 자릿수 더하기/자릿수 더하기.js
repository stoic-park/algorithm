function solution(n)
{
//     var answer = 0;

//     // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
//     console.log('Hello Javascript')

//     return answer;
    
    return String(n).split('').reduce((a,b) => Number(a) + Number(b),0);
}