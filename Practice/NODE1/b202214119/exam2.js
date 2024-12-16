let a = []; // 빈 배열 생성

// 1 이상 20 이하의 랜덤한 정수 20개를 배열에 추가
for (let i = 0; i < 20; i++) {
  a.push(Math.floor(Math.random() * 20) + 1);
}

// 숫자 오름차순으로 배열 정렬
a.sort(function(x, y) {
  return x - y;
});
console.log("오름차순 정렬: ", a);

// 숫자 내림차순으로 배열 정렬
a.sort(function(x, y) {
  return y - x;
});
console.log("내림차순 정렬: ", a);
