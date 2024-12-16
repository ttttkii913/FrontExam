// dice 함수 구현
function dice(num) {
    return num = Math.floor(Math.random() * 6 + 1);
}
for (let i = 0; i < 10; ++i)
    console.log(dice());

// 1부터 6까지 랜덤한 정수를 리턴
// 출력
// 5
// 6
// 1
// 6
// 4
// 3
// 1
// 3
// 4
// 1
