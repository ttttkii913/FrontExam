let a = []; // 빈 배열 생성

for (let i = 0; i < 20; i++) {
  a.push(Math.floor(Math.random() * 20) + 1); // 1 이상 20 이하의 랜덤한 정수를 배열에 추가
}

console.log(a); // 배열 출력
