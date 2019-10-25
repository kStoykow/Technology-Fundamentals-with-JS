function solve(input) {
    let specialWords = [];
    let text = input.split(' ');

    for (const word of text) {
        if (word.startsWith('#') && word.length > 1) {
            let wordToPush = word.replace('#', '');
            let lowerCase = 0;
            let upperCase = 0;

            for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
                for (let p = 0; p < wordToPush.length; p++) {
                    if (wordToPush[p] == String.fromCharCode(i)) {
                        lowerCase++;
                    }
                }
            }

            for (let l = "A".charCodeAt(0); l <= 'Z'.charCodeAt(0); l++) {
                for (let k = 0; k < wordToPush.length; k++) {
                    if (wordToPush[k] == String.fromCharCode(l)) {
                        upperCase++;
                    }
                }
            }

            if (wordToPush.length == (upperCase + lowerCase)) {
                specialWords.push(wordToPush);
            }

            lowerCase = 0;
            upperCase = 0;
        }
    }

    for (const word of specialWords) {
        console.log(word);
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')