function cloneObj(obj) {
    // obj 객체를 복제해서,
    let obj2 = Object.assign({}, obj);
    // 복제한 객체를 출력하고,
    console.log(obj2);
    // 복제한 객체를 리턴
    return obj2;
  }
  
  let p1 = {name: "홍길동", age: 16 };
  let p2 = cloneObj(p1);
  let r1 = {width: 100, height: 200};
  let r2 = cloneObj(r1);
  