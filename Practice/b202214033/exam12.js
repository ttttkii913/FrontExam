function removeEven(a) {
    // 배열에서 짝수를 모두 제거하고 리턴한다.
    // ar 배열에서 직접 제거하고 ar 배열을 리턴해도 좋고,
    // 짝수가 제거된 새 배열을 만들어서 리턴해도 좋다.
    let res = [];
    
    for (let i = 0; i < a.length; ++i) {
        if (a[i] % 2 !== 0)
            res.push(a[i]);
    }
    return res;
  }
  
  console.log(removeEven([1, 2, 3]));
  console.log(removeEven([4, 5, 6, 7]));
  console.log(removeEven([8, 9, 10, 11, 12, 13]));
  