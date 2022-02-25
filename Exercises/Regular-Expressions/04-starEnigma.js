function solve(input) {
    let messageCount = Number(input.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];
    let pattern = /.*?@(?<name>[A-Z][a-z]+)[^@,-,!,:,>]*?:(?<population>\d+)[^@,-,!,:,>]*?!(?<type>(A|D))![^@,-,!,:,>]*?->(?<count>\d+)/g;

    for (const message of input) {
        let key = 0;
        let keyPattern = /[s,t,a,r]/gi;
        let matches = message.match(keyPattern);

        if (matches != null) {
            key = matches.length;
        }

        let decrypted = '';
        for (const char of message) {
            let charCode = char.charCodeAt(0);
            decrypted += String.fromCharCode(charCode - key);
        }

        if (decrypted.match(pattern)) {
            let currAttack = pattern.exec(decrypted);
            if (currAttack.groups.type == "A") {
                attackedPlanets.push(currAttack.groups.name);
            } else {
                destroyedPlanets.push(currAttack.groups.name);
            }
        }
    }

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    for (const planet of attackedPlanets) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    for (const planet of destroyedPlanets) {
        console.log(`-> ${planet}`);
    }
}
solve(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'])