function sumDigits(number) {
    return number.toString().split('').map(Number).reduce((a, b) => a + b);
}
console.log(sumDigits('456'));