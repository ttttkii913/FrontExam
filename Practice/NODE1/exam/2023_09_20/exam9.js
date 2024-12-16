function removeSpace(s) {
    // 이 함수를 구현하라
   return s.replace(/ /g, '');
  }
  
  console.log(removeSpace("aa bb ccc"));
  console.log(removeSpace("a b cc ddd  e"));
  
// s에 들어있는 공백 문자들이 전부 제거된 새 문자열을 리턴하도록

// 출력
// aabbcc
// abccdde