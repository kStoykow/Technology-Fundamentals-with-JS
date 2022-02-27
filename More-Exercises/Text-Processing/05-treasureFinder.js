function solve(input) {
    let keys = input.shift().split(' ');
    let string = input.shift();

    while (string != 'find') {

        let counter = 0;
        let currResult = '';

        for (const char of string) {
            let charCode = Number(char.charCodeAt(0));
            if (keys[counter]) {
                currResult += String.fromCharCode(charCode - keys[counter]);
                counter++;
            } else {
                counter = 0;
                currResult += String.fromCharCode(charCode - keys[counter]);
                counter++;
            }
        }

        let typeStart = currResult.indexOf('&');
        let typeEnd = currResult.lastIndexOf('&');
        let type = currResult.substring(typeStart + 1, typeEnd);
        let coordinateStart = currResult.indexOf('<');
        let coordinateEnd = currResult.indexOf('>');
        let coordinate = currResult.substring(coordinateStart + 1, coordinateEnd);

        console.log(`Found ${type} at ${coordinate}`);
        string = input.shift();
    }
}
solve(['1 2 1 3',
    'ikegfp\'jpne)bv\=41P83X@',
    'ujfufKt)Tkmyft\'duEprsfjqbvfv\=53V55XA',
    'find'])