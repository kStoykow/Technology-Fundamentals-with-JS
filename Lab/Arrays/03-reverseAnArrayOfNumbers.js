function sliceAndReverse(n, arr) {
    return arr.slice(0, n).reverse().join(' ');
}
console.log(sliceAndReverse(7, [10, 20, 30, 40, 50]));