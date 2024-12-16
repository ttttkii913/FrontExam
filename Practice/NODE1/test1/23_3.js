function createArray(count) {
    /*if (count < 1 || count > 5) {
      return "올바른 범위의 숫자를 입력해주세요.";
    }*/
  
    let result = [];
    for (let i = 1; i <= count; i++) {
      result.push(i);
    }
    return result;
  }
  
  console.log(createArray(2)); // 출력: [1, 2]
  console.log(createArray(3)); // 출력: [1, 2, 3]
  console.log(createArray(4)); // 출력: [1, 2, 3, 4]
  console.log(createArray(5)); // 출력: [1, 2, 3, 4, 5]
  //console.log(createArray(6)); // 출력: "올바른 범위의 숫자를 입력해주세요."
  