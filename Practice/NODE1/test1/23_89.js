function countSpace(s) {//8번 공백 개수 리턴
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
        count++;
      }
    }
    return count;
  }
  
  console.log(countSpace("aa bb ccc")); // 출력: 2
  console.log(countSpace("a b cc ddd  e")); // 출력: 5



  function removeSpace(s) {//9번 공백 제거
  return s.replace(/\s/g, '');
  }
  
  console.log(removeSpace("aa bb ccc")); // 출력: aabbccc
  console.log(removeSpace("a b cc ddd e")); // 출력: abccddde
  
  

