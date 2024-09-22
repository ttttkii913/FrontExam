function countProperties(obj) {
    // obj 객체의 속성(멤버 변수)의 수를 세서 리턴하는 함수 구현
    return Object.keys(obj).length;
   }
   
   let person = { name: '홍길동', age: 16, height: 180 }
   let count = countProperties(person)
   console.log(count)

// 출력
// 3   