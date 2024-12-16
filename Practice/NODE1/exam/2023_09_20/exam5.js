function rotate(a) {
    let last = a.pop();
    a.unshift(last); 
  }
  
  let a = [1, 2, 3, 4];
  rotate(a);
  console.log(a);
  
  rotate(a);
  console.log(a);
  
// rotate 호출할 때 마다 a 배열이 오른쪽으로 한 칸 회전
// 배열의 오른쪽 끝 값은 배열의 왼쪽 첫 칸으로 이동, 나머지 값들은 한 칸씩 왼쪽으로 이동
// 출력
// [ 4, 1, 2, 3 ]
// [ 3, 4, 1, 2 ]