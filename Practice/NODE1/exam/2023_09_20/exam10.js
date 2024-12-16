function testCallback(f, a, b) {
    // 이 함수를 구현하라
    console.log(f(a, b));
  }
  
  testCallback((a, b) => a + b, 3, 4);
  testCallback((a, b) => a * b, 3, 4);
  
// a, b를 파라미터로 전달하며 f 콜백 함수를 호출하고 f
// 콜백 함수가 리턴하는 값을 출력하는 함수 구현

// 출력
// 7
// 12