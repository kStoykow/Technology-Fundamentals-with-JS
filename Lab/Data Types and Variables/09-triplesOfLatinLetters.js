function tripleOfLatins(n) {
    let res = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let l = 0; l < n; l++) {
                res += `${String.fromCharCode(97 + i) + String.fromCharCode(97 + j) + String.fromCharCode(97 + l)}\n`;
            }
        }
    }
    return res;
}
console.log(tripleOfLatins(2));