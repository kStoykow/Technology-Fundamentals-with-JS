function solve(input) {
    let text = input.shift();
    let toFind = input.shift();
    let sum = 0;
    let isValidLowerCase = (symbol) => {
        return symbol.charCodeAt(0) >= 97 && symbol.charCodeAt(0) <= 122;
    }

    let isValidUpperCase = (symbol) => {
        return symbol.charCodeAt(0) >= 65 && symbol.charCodeAt(0) <= 90;
    }

    if (toFind == 'LOWERCASE') {
        for (const char of text) {
            if (char == char.toLowerCase()) {
                if (isValidLowerCase(char)) {
                    sum += char.charCodeAt(0);
                }
            }
        }

    } else {
        for (const char of text) {
            if (char == char.toUpperCase()) {
                if (isValidUpperCase(char)) {
                    sum += char.charCodeAt(0);
                }
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}
solve(['AC/DC',
    'UPPERCASE'])