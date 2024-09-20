let a = [];
for (let i = 0; i < 20; ++i) {
    a.push(Math.floor(Math.random() * 20 + 1));
}

console.log(a);

for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] % 2 != 0)
        a.splice(i, 1);
}
console.log(a);