// move(a) 함수 구현
function move(a) {
    let last = a.pop();
    a.unshift(last);
}
let a = [1, 2, 3, 4, 5];
for (let i = 0; i < 3; ++i) {
  move(a);
  console.log(a);
}

// a 배열의 원소들이 한 칸씩 오른쪽으로 이동하는 move 함수 구현
// 출력
// [ 5, 1, 2, 3, 4 ]
// [ 4, 5, 1, 2, 3 ]
// [ 3, 4, 5, 1, 2 ]
