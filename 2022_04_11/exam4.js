function removeRight(a, count) {
    a.splice(-count);
   }
   
   let a = [0, 1, 2, 3, 4]
   removeRight(a, 2)
   console.log(a)

// a의 오른쪽 끝에서 count개의 항목 제거 removeRight 함수 구현
// 출력
// [ 0, 1, 2 ]