function countVowel(s) {
    // 문자열 s에서 모음의 수를 세어서 리턴한다
    // 모음은 a, e, i, o, u
    let vowel = 'aeiou';
    let count = 0;

    for (let ch of s) {
        if (vowel.indexOf(ch.toLowerCase()) !== -1) {
            count++;
        }
    }
    return count;
  }
  
  console.log(countVowel("hello world"));
  console.log(countVowel("GOOD MORNING"));
  console.log(countVowel("how are you?"));
  