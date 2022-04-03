function solve(arr) {
    let spell = arr.shift();
    let r = '';
    
    const commandsMap = {
        Abjuration: (spell, _) => {
            spell = spell.toUpperCase();
            r += `${spell}\n`;
            return spell;
        },

        Necromancy: (spell, _) => {
            spell = spell.toLowerCase();
            r += `${spell}\n`;
            return spell;
        },

        Illusion: (spell, rest) => {
            let i = Number(rest[0]);
            let letter = rest[1];

            if (i >= 0 && i < spell.length) {
                spell = spell.split('');
                spell[i] = letter;
                spell = spell.join('');
                r += 'Done!\n';
            } else {
                r += 'The spell was too weak.\n';
            }
            return spell;
        },

        Divination: (spell, rest) => {
            let [sub, replacer] = rest;

            if (spell.includes(sub) == true) {
                let pattern = new RegExp(`${sub}`, 'g');
                spell = spell.replace(pattern, replacer);
                r += `${spell}\n`;
            }
            return spell;

        },
        Alteration: (spell, rest) => {
            let sub = rest[0];

            if (spell.includes(sub) == true) {
                spell = spell.substring(0, spell.indexOf(sub)) + spell.substring(spell.indexOf(sub) + sub.length);
                r += `${spell}\n`;
            }
            return spell;
        },
    }

    for (const e of arr) {
        if (e == 'Abracadabra' == true) {
            return r;
        }
        let [command, ...rest] = e.split(' ');

        if (typeof commandsMap[command] == 'function') {
            spell = commandsMap[command](spell, rest);
        } else {
            r += 'The spell did not work!\n';
        }
    }
}
console.log(solve(["SwordMaster",
    "Target Target Target",
    'Illusion 2 0',
    'Illusion 6 4',
    'Abjuration',
    'Necromancy',
    'Alteration master',
    "Abracadabra"])
);