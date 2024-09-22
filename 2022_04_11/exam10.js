// 비어있는 persons 배열 생성
let persons = [];

// for 루프의 본문에서 persons 배열의 끝에 { name: "홍길동", age: 16 + i } 객체 추가
// for 루프 10번 반복
for (let i = 0; i < 10; ++i) {
    persons.push( {name: "홍길동", age: 16 + i});
}

// persons 배열 출력
console.log(persons);