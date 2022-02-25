function calculate(x, operator, y) {
    let calcMap = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y
    }
    return calcMap[operator](x, y);
}
console.log(calculate(4, '*', 5));