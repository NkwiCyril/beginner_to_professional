function swap(a , b) {
    var tem = a;
    a = b;
    b = tem;
    return [a, b];
}

console.log(swap(12, 21));