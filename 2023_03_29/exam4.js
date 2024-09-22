// removes 함수 구현
function removes(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] % 3 !== 0)
            res.push(arr[i]);
    }
    return res;
}
console.log(removes([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(removes([11, 12, 13, 14, 15]));

// 3의 배수들이 제외된 값들이 들어있는 새 배열 리턴 함수 removes 구현
// 출력
// [ 1, 2, 4, 5, 7, 8 ]
// [ 11, 13, 14 ]
