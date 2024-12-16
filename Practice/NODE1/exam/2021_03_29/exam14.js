function createArray() {
    let arr = [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
    ];
    arr[2] = arr[0];
    arr[1] = arr[0];
    return arr;
}
let a = createArray();
console.log(a);

a[0][0] = 10;
console.log(a);