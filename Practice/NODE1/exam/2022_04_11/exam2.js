function remove(a, index) {
    a.splice(index, 1);
}

let a = [0, 1, 2, 3, 4]
remove(a, 2)
console.log(a)

// a 배열에서 index 위치 항목 한 개 제거 함수 remove 구현
// 출력 
// [0, 1, 3, 4]