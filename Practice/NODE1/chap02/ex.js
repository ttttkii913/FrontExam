let a = [
    "c:/temp/guide.hwp",
    "c:/pj/frontend/chap05/substring1.js",
    "homework.docx"
];

for (let i = 0; i < a.length; i++) {
    const path = a[i];
    const fileName = path.split('/').pop();
    const extension = fileName.split('.').pop();
    const nameOnly = fileName.split('.')[0];

    console.log(`파일 확장자: .${extension}`);
    console.log(`파일명: ${fileName}`);
    console.log(`파일 이름: ${nameOnly}`);
}
