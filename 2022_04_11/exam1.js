let a = [1, "a", 2, "c", 4, "d", 5, "e", "f", 6, 7]

let numCount = 0;
let stCount = 0;

for (let item of a) {
    if (typeof item === 'number')
        ++numCount;
    else if (typeof item === 'string')
        ++stCount;
}

console.log("number:" + numCount + " string:" + stCount);
// 숫자의 수와, 문자열의 수를 세어서 출력하는 코드를 추가하라
// 출력 
// number:6 string:5