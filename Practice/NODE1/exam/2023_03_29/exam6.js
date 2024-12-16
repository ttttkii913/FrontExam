// remove(a, index) 함수 구현
function remove(a, index) {
    a.splice(index, 1);
}

let a = [1, 2, 3, 4, 5];
remove(a, 1);
remove(a, 2);
console.log(a);

// a 배열의 index 위치의 원소 제거 remove 함수 구현
// 출력
// [ 1, 3, 5 ]