function solve(input) {
    let str = input.shift();
    let search = input.shift();

    const isValidLowerCase = (char) => {
        return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
    }

    const isValidUpperCase = (char) => {
        return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
    }

    function outputParse(str, param) {
        if (param == 'LOWERCASE') {
            return `The total sum is: ${str.split('')
                .reduce((a, b) => {
                    if (isValidLowerCase(b)) {
                        a += b.charCodeAt(0);
                    }
                    return a;
                }, 0)}`;


        } else {
            return `The total sum is: ${str.split('')
                .reduce((a, b) => {
                    if (isValidUpperCase(b)) {
                        a += b.charCodeAt(0);
                    }
                    return a;
                }, 0)}`;
        }
    }

    return outputParse(str, search);
}
console.log(solve(['AC/DC',
    'UPPERCASE']));