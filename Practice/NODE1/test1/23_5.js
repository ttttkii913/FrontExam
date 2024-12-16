function rotate(a) {
    let lastElement = a.pop(); // 배열의 마지막 요소를 추출합니다.
    a.unshift(lastElement); // 추출한 요소를 배열의 맨 앞에 추가합니다.
  }
  
  let a = [1, 2, 3, 4];
  rotate(a);
  console.log(a); // 출력: [ 4, 1, 2, 3 ]
  
  rotate(a);
  console.log(a); // 출력: [ 3, 4, 1, 2 ]
  