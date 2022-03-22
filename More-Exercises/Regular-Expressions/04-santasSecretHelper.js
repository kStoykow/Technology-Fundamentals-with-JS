function solve(input) {
    let key = Number(input.shift());
    let line = input.shift();
    let pattern = /@(?<name>[a-zA-Z]+)[^@!:>-]+!(?<behavior>G|N)!/g;
    let r = '';
    while (line != 'end') {
        let currKid = '';
        for (const char of line) {
            let charCode = char.charCodeAt(0);
            currKid += String.fromCharCode(charCode - key);
        }

        if (currKid.match(pattern)) {
            let kid = pattern.exec(currKid);
            if (kid.groups.behavior == 'G') {
                r += `${kid.groups.name}\n`;
            }
        }

        line = input.shift();
    }
    return r;
}
console.log(solve(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejnW$J$',
    'CVwdq&gnmjkvng$Q$',
    'end']));