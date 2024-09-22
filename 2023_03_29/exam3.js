// types 함수 구현
function types(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i)
        res.push(typeof arr[i]);
    return res;
}
console.log(types([3, "hello", true]));
console.log(types(["world", []]));

// 배열을 생성하여 리턴하는 types 함수 구현
// 출력
// [ 'number', 'string', 'boolean' ]
// [ 'string', 'object' ]
