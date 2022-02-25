function numbers(from, to) {
    let r = '';
    for (let i = from; i <= to; i++) {
        r += `${i} `;
    }

    return [r, `Sum: ${r.split(' ').map(Number).reduce((a, b) => a + b, 0)}`].join('\n');
}
console.log(numbers(1, 5));