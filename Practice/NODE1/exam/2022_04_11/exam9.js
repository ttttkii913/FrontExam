let a = [
    {age: 101, name: "홍길동", age: 16}
];
a[2] = a[0];
a[1] = a[0];

console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);