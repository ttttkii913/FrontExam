function add(a, ...values) {
    // a 배열의 끝에 값 추가 add 함수 구현
    a.push(...values);
  }
  
  let a = [0, 1]
  add(a, 2, 3, 4, 5)
  console.log(a)

// 출력
// [ 0, 1, 2, 3, 4, 5 ]