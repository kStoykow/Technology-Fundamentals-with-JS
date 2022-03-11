function solve(str) {
    let result = '';
    for (const char of str) {
        result += `${char}\n`;
    }
    return result;
}
console.log(solve('AWord'));