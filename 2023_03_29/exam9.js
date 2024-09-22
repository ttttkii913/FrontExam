// sum(a) 함수 구현
function sum(a) {
    let res = 0;
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < a[i].length; ++j)
            res += a[i][j];
    }
    return res;
}

let a1 = [[1, 2], [3, 4, 5]];
let a2 = [[1], [2, 3, 4], [5, 6]];
console.log(sum(a1));
console.log(sum(a2));

// 이차원 배열 a의 원소들의 합계 리턴 함수 sum 구현
// 출력
// 15
// 21
