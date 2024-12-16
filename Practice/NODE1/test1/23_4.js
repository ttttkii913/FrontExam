function createArray(count) {
    /*if (count < 0 || count >= 5) {
      return "올바른 범위의 숫자를 입력해주세요.";
    }*/
    
    let result = [];
    for (let i = 0; i < count; i++) {
      result.push(Math.random() * 5);
    }
    return result;
  }
  
  console.log(createArray(2)); 
  console.log(createArray(3)); 
  console.log(createArray(4)); 
  console.log(createArray(5));
  