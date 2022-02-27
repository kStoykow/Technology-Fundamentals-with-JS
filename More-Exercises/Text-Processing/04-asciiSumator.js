function solve(input) {
    let firstChar = input.shift();
    let secondChar = input.shift();
    let text = input.shift();
    let totalSum = 0;

    for (const char of text) {
        if (char.charCodeAt(0) > firstChar.charCodeAt(0) && char.charCodeAt(0) < secondChar.charCodeAt(0)) {
            totalSum += char.charCodeAt(0);

        } else if (char.charCodeAt(0) < firstChar.charCodeAt(0) && char.charCodeAt(0) > secondChar.charCodeAt(0)) {
            totalSum += char.charCodeAt(0);
        }
    }

    console.log(totalSum);
}
solve(['a',
    '1',
    'jfe392$#@j24ui9ne#@$'])