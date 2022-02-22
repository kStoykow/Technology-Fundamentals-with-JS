function sumEvenNums(arr) {
    return arr.map(Number).filter(e => e % 2 == 0).reduce((a, b) => a += b, 0);
}
console.log(sumEvenNums(['1', '2', '3', '4', '5', '6']));