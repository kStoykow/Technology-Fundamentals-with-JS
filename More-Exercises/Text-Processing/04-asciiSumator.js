function solve(input) {
    let [a, b] = [input[0], input[1]].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    let str = input[2];
    let sum = 0;

    for (const char of str) {
        if (char.charCodeAt(0) > a.charCodeAt(0) && char.charCodeAt(0) < b.charCodeAt(0)) {
            sum += char.charCodeAt(0);
        }
    }
    return sum;
}
console.log(solve(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']));