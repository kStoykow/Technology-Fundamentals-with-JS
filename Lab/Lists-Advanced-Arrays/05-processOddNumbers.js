function processOddNums(arr) {
    return arr
        .filter((_, i) => i % 2 == 0)
        .map(e => e * 2)
        .reverse()
        .join(' ')
}
console.log((processOddNums([10, 20, 30, 40])));