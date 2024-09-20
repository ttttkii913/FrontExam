function insertZero(a, index) {
    // 이 함수를 구현하라
    a.splice(index, 0, 0);
  }
  
  let a = [1, 2, 3];
  insertZero(a, 2);
  console.log(a);
  insertZero(a, 1);
  console.log(a);
  
// a 배열의 index 위치에 0 값을 삽입하는 함수 구현하라

// 출력
// [ 1, 2, 0, 3 ]
// [ 1, 0, 2, 0, 3 ]