function cloneArray(ar) {
    // ar 배열을 복제해서,
    let array = [...ar];
    // 복제한 배열을 출력하고,
    console.log(array);
    // 복제한 배열을 리턴
    return array;
  }
  
  let a1 = [1, 2, 3];
  let a2 = cloneArray(a1);
  let b1 = [{name: "홍길동", age: 16}, {name: "임꺽정", age: 20}];
  let b2 = cloneArray(b1);
  