function solve(input) {
    let frogs = input.shift().split(' ');

    for (let command of input) {
        command = command.split(' ');

        if (command.includes('Join')) {
            let [toDo, name] = command;
            frogs.push(name);

        } else if (command.includes('Jump')) {
            let [toDo, name, i] = command;
            if (frogs[i]) {
                frogs.splice(i, 0, name);
            }

        } else if (command.includes('Dive')) {
            let [toDo, i] = command;
            if (frogs[i]) {
                frogs.splice(i, 1);
            }

        } else if (command.includes('First')) {
            let [toDo, count] = command;
            console.log(frogs.slice(0, count).join(' '));

        } else if (command.includes('Last')) {
            let [toDo, count] = command;
            console.log(frogs.slice(frogs.length - count).join(' '));

        } else if (command.includes('Print')) {
            let [toDo, mode] = command;
            if (mode == 'Normal') {
                console.log(`Frogs: ${frogs.join(' ')}`);
                break;
            } else {
                console.log(`Frogs: ${frogs.reverse().join(' ')}`);
                break;
            }
        }
    }
}
solve(['Blake Muggy Kishko',
    'Join Kvachko',
    'Dive 0',
    'First 10',
    'Print Normal']);