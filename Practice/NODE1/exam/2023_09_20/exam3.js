function createArray(count) {
    // 이 함수를 구현하라
    let a = [];
    for (let i = 0; i < count; ++i) {
        let num = Math.floor(Math.random() * 5 + 1);
        a.push(num);
    }
    return a;
}
  
console.log(createArray(2));
console.log(createArray(3));
console.log(createArray(4));
console.log(createArray(5));

// 1 이상 5 이하 정수가 count개 들어있는 배열 생성하여 리턴