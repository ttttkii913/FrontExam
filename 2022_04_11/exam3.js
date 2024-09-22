function insert(a, index, value) {
    a.splice(index, 0, value);
 }
 
 let a = [0, 1, 3, 4]
 insert(a, 2, 2)
 console.log(a)

 // a 배열의 index 위치에 value 삽입 함수 insert 구현
 // 출력
 // [ 0, 1, 2, 3, 4 ]