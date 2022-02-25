function distinctArr(arr) {
    return [...new Set(arr)].join(' ');
}
console.log(
    distinctArr([20, 8, 12, 13, 4, 4, 8, 5])
);