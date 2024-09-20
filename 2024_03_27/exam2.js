let a = [];
for (let i = 0; i < 20; ++i) {
    a.push(Math.floor(Math.random() * 20 + 1));
}

a.sort(function(x, y) {
    return x - y;
});
console.log("오름차순 정렬: ", a);

a.sort(function(x, y) {
    return y - x;
});
console.log("내림차순 정렬: ", a);