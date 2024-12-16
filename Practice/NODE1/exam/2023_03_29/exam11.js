// removes 함수 구현
function removes(s) {
    let r = "";
    for (let i = 0; i < s.length; ++i)
      if ("aeiou".indexOf(s[i]) < 0)
        r = r + s[i];
    return r;
  }
  
  console.log(removes("helloworld"));
  console.log(removes("onetwothree"));

// s 문자열에서 모음 문자들을 제거된 새 문자열을 만들어 리턴하는 removes 함수 구현
// 출력
// hllwrld
// ntwthr
