function countSpace(s) {
    // 이 함수를 구현하라
    return (s.match(/ /g) || []).length;
  }
  
  console.log(countSpace("aa bb ccc"));
  console.log(countSpace("a b cc ddd  e"));
  
// 문자열 s에 들어있는 공백 문자의 개수 리턴

// 출력
// 2
// 5