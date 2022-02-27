function solve(input) {
    let command = input.shift();
    let acc = {};

    let add = (obj, name, hp, energy) => {
        if (!obj.hasOwnProperty(name)) {
            obj[name] = {};
            obj[name]['hp'] = Number(hp);
            obj[name]['energy'] = Number(energy);
        } else {
            obj[name]['hp'] += Number(hp);
        }
        return;
    };
    let attack = (obj, attacker, deffender, dmg) => {
        if (obj.hasOwnProperty(attacker) && obj.hasOwnProperty(deffender)) {
            obj[deffender]['hp'] -= Number(dmg);
            obj[attacker]['energy'] -= 1;

            if (obj[deffender]['hp'] <= 0) {
                console.log(`${deffender} was disqualified!`);
                delete obj[deffender];
            }

            if (obj[attacker]['energy'] == 0) {
                console.log(`${attacker} was disqualified!`);
                delete obj[attacker];
            }
        }
        return;
    };
    let deleteUser = (obj, name) => {
        if (name == 'All') {
            for (const key in obj) {
                delete obj[key];
            }
        } else {
            if (obj.hasOwnProperty(name)) {
                delete obj[name];
            }
        }

        return;
    };

    while (command != 'Results') {
        if (command.includes('Add')) {
            let [, name, hp, energy] = command.split(':');
            add(acc, name, hp, energy);
        } else if (command.includes('Attack')) {
            let [, attacker, deffender, dmg] = command.split(':');
            attack(acc, attacker, deffender, dmg);
        } else {
            let [, name] = command.split(':');
            deleteUser(acc, name);
        }

        command = input.shift();
    }

    console.log(`People count: ${Object.keys(acc).length}`);
    Object.entries(acc)
        .sort((a, b) => b[1]['hp'] - a[1]['hp'] || a[0].localeCompare(b[0]))
        .forEach(([name, objValues]) => console.log(`${name} - ${objValues['hp']} - ${objValues['energy']}`));
}
solve([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'])