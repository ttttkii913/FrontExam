function createArray() {
    let arr = [1, 2, 3];
    return [arr, arr, arr];
}
let a = createArray();
console.log(a);

a[0][0] = 10;
console.log(a);