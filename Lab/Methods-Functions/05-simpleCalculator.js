function calculator(x, y, operation) {
    const calcMap = {
        'add': (x, y) => x + y,
        'subtract': (x, y) => x - y,
        'multiply': (x, y) => x * y,
        'divide': (x, y) => x / y
    }

    return calcMap[operation](x, y);
}
console.log(calculator(2,3,'add'));