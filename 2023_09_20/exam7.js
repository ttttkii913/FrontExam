function createArray() {
    // 이 함수를 구현하라
    let a1 = [1, 2];
    let a2 = [3, 4, 5];
    let a = [a1, a2];
    a[2] = a[1];
    return a;
  }
  
  console.log(createArray());
  
// 메모리 구조

// 출력
// [ [ 1, 2 ], [ 3, 4, 5 ], [ 3, 4, 5 ] ]