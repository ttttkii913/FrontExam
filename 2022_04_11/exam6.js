let a = [
    "c:/temp/guide.hwp",
    "c:/pj/frontend/chap05/substring1.js",
    "homework.docx"
];

// 파일명 부분을 추출하는 정규식
let fileNames = a.map(path => path.match(/[^\\/]+$/)[0]);

console.log(fileNames);
