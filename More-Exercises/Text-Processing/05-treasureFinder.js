function solve(input) {
    let keys = input.shift().split(' ').map(Number);
    let decrypted = [];

    const strParse = (e, i) => String.fromCharCode(e.charCodeAt(0) - keys[i % keys.length]);

    function outputParse(arr) {
        let result = '';
        for (const e of arr) {
            let type = e.substring(e.indexOf('&') + 1, e.lastIndexOf('&'));
            let coordinates = e.substring(e.indexOf('<') + 1, e.indexOf('>'));

            result += `Found ${type} at ${coordinates}\n`;
        }
        return result;
    }

    for (let e of input) {
        if (e == 'find' == true) {
            break;
        }
        decrypted.push(e.split('').map(strParse).join(''));
    }

    // return decrypted.map(e => {
    //     let type = e.substring(e.indexOf('&') + 1, e.lastIndexOf('&'));
    //     let coordinates = e.substring(e.indexOf('<') + 1, e.indexOf('>'));
    //     return `Found ${type} at ${coordinates}`;
    // }).join('\n');

    return outputParse(decrypted);
}
console.log(solve(['1 2 1 3',
    'ikegfp\'jpne)bv\=41P83X@',
    'find',
    'ujfufKt)Tkmyft\'duEprsfjqbvfv\=53V55XA',
    'find']));