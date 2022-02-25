function printChars(...params) {
    return params.reverse().join('');
}
console.log(printChars('a', 'b', 'c'));