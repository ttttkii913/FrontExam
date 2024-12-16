let a = []; // 빈 배열 생성

// 1 이상 20 이하의 랜덤한 정수 20개를 배열에 추가
for (let i = 0; i < 20; i++) {
  a.push(Math.floor(Math.random() * 20) + 1);
}

console.log("원본 배열: ", a); // 원본 배열 출력

// 홀수를 전부 제거
let evenNumbers = [];
for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0) {
    evenNumbers.push(a[i]);
  }
}
a = evenNumbers;

console.log("홀수 제거 후 배열: ", a); // 홀수가 제거된 배열 출력
