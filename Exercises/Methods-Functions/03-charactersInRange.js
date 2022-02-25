function printCharSequence(firstChar, lastChar) {
    return getSequenceOfChars(firstChar, lastChar);

    function getSequenceOfChars(x, y) {
        let result = '';
        for (let i = Math.min(x.charCodeAt(0), y.charCodeAt(0)) + 1; i < Math.max(x.charCodeAt(0), y.charCodeAt(0)); i++) {
            result += `${String.fromCharCode(i)} `
        }
        return result;
    }
}
console.log(printCharSequence('a', 'y'));