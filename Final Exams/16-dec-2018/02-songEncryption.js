function solve(input) {
    let validPattern = /^([A-Z'][a-z' ]+:[A-Z ]+)$/g;
    let whiteSpacePattern = /[\s']/g;
    let delimiterPattern = /:/g;
    let upperCasePattern = /[A-Z]/g;
    let lowerCasePattern = /[a-z]/g;
    let line = input.shift();

    while (line != 'end') {
        let artist = line.split(':')[0];
        let result = '';

        if (line.match(validPattern)) {
            let key = artist.length;

            for (let char of line) {
                let charCode = char.charCodeAt(0);
                let encryptedChar = charCode + key;

                if (char.match(upperCasePattern)) {
                    let upperEnd = 'Z'.charCodeAt(0);
                    let upperStart = 'A'.charCodeAt(0);

                    if (charCode + key > upperEnd) {
                        let newKey = key - (upperEnd - charCode);
                        result += String.fromCharCode(upperStart + newKey - 1);
                    } else {
                        result += String.fromCharCode(encryptedChar);
                    }

                } else if (char.match(whiteSpacePattern)) {
                    result += char;

                } else if (char.match(delimiterPattern)) {
                    result += '@';

                } else if (char.match(lowerCasePattern)) {
                    let lowerStart = 'a'.charCodeAt(0);
                    let lowerEnd = 'z'.charCodeAt(0);

                    if (charCode + key > lowerEnd) {
                        let newKey = key - (lowerEnd - charCode);
                        encryptedChar = lowerStart + key;
                        result += String.fromCharCode(lowerStart + newKey - 1);
                    } else {
                        result += String.fromCharCode(encryptedChar);
                    }
                }
            }

            console.log(`Successful encryption: ${result}`);
        } else {

            console.log('Invalid input!');       
        }

        line = input.shift();
    }
}
solve(['Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'])