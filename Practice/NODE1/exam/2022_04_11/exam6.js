let a = ["c:/temp/guide.hwp",
    "c:/pj/frontend/chap05/substring1.js",
    "homework.docx"]

// 파일명 부분만 찾아서 출력 코드 추가 - 정규식은 문제에 제시해준다 함
console.log(a.match(/[^\\/]+$/)[0]);
