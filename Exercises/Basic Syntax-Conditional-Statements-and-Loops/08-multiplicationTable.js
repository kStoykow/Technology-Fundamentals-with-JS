function solve(n) {
    let r = '';
    for (let i = 1; i <= 10; i++) {
        r += `${n} X ${i} = ${n * i}\n`;
    }
    return r;
}
console.log(solve(3));